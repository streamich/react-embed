/** oEmbed response as defined by https://oembed.com */
export interface OEmbedResponse {
  type: 'photo' | 'video' | 'link' | 'rich';
  version: string;
  title?: string;
  author_name?: string;
  author_url?: string;
  provider_name?: string;
  provider_url?: string;
  cache_age?: number | string;
  thumbnail_url?: string;
  thumbnail_width?: number;
  thumbnail_height?: number;
  width?: number;
  height?: number;
  /** HTML markup for video/rich types */
  html?: string;
  /** Direct URL for photo type */
  url?: string;
}

/** A registered oEmbed provider: [hostnames[], endpointBase] */
export type Provider = [patterns: string[], endpoint: string];

const PROVIDERS: Provider[] = [
  [['www.youtube.com', 'youtube.com', 'youtu.be'], 'https://www.youtube.com/oembed'],
  [['vimeo.com', 'player.vimeo.com'], 'https://vimeo.com/api/oembed.json'],
  [['twitter.com', 'x.com', 'mobile.twitter.com'], 'https://publish.twitter.com/oembed'],
  [['soundcloud.com'], 'https://soundcloud.com/oembed'],
  [['www.instagram.com', 'instagram.com'], 'https://api.instagram.com/oembed/'],
  [['www.flickr.com', 'flickr.com', 'flic.kr'], 'https://www.flickr.com/services/oembed/'],
  [['open.spotify.com'], 'https://open.spotify.com/oembed'],
  [['www.reddit.com', 'reddit.com'], 'https://www.reddit.com/oembed'],
  [['www.tiktok.com', 'tiktok.com', 'vm.tiktok.com'], 'https://www.tiktok.com/oembed'],
  [['codepen.io'], 'https://codepen.io/api/oembed'],
  [['www.dailymotion.com', 'dailymotion.com'], 'https://www.dailymotion.com/services/oembed'],
  [['giphy.com', 'gph.is', 'media.giphy.com'], 'https://giphy.com/services/oembed'],
  [['www.slideshare.net', 'slideshare.net'], 'https://www.slideshare.net/api/oembed/2'],
  [['speakerdeck.com'], 'https://speakerdeck.com/oembed.json'],
  [['www.mixcloud.com', 'mixcloud.com'], 'https://www.mixcloud.com/oembed/'],
  [['www.deviantart.com', 'deviantart.com', 'fav.me', 'sta.sh'], 'https://backend.deviantart.com/oembed'],
  [['www.ted.com', 'ted.com'], 'https://www.ted.com/services/v1/oembed.json'],
  [['www.tumblr.com', 'tumblr.com'], 'https://www.tumblr.com/oembed/1.0'],
  [['www.kickstarter.com', 'kickstarter.com', 'kck.st'], 'https://www.kickstarter.com/services/oembed'],
  [['www.meetup.com', 'meetup.com'], 'https://api.meetup.com/oembed'],
  [['500px.com'], 'https://api.500px.com/v1/photos/oembed'],
  [['www.twitch.tv', 'twitch.tv', 'clips.twitch.tv'], 'https://www.twitch.tv/oembed'],
  [['music.apple.com'], 'https://music.apple.com/oembed'],
  [['www.pinterest.com', 'pinterest.com', 'pin.it'], 'https://www.pinterest.com/oembed.json'],
  [['www.deezer.com', 'deezer.com'], 'https://api.deezer.com/oembed'],
  [['bandcamp.com'], 'https://bandcamp.com/oembed'],
  [['www.wistia.com', 'wistia.com', 'wi.st', 'fast.wistia.net'], 'https://fast.wistia.com/oembed.json'],
  [['www.loom.com', 'loom.com'], 'https://www.loom.com/v1/oembed'],
  [['www.canva.com', 'canva.com'], 'https://www.canva.com/api/oembed'],
];

const WELL_KNOWN_PATHS = ['/oembed', '/oembed.json', '/api/oembed', '/services/oembed'];

/**
 * Returns the oEmbed JSON endpoint URL for a given page URL, or `null` if no
 * registered provider matches the hostname.
 */
export function getOEmbedEndpoint(url: string): string | null {
  let hostname: string;
  try {
    hostname = new URL(url).hostname;
  } catch {
    return null;
  }
  for (const [patterns, endpoint] of PROVIDERS) {
    if (patterns.includes(hostname)) {
      return `${endpoint}?url=${encodeURIComponent(url)}&format=json`;
    }
  }
  return null;
}

/**
 * Fetches oEmbed metadata for the given page URL.
 *
 * If no registered provider matches, probes well-known oEmbed paths on the
 * same origin (`/oembed`, `/oembed.json`, `/api/oembed`, `/services/oembed`).
 * Throws if every attempt fails or is blocked by CORS.
 */
export async function fetchOEmbed(url: string, signal?: AbortSignal): Promise<OEmbedResponse> {
  const knownEndpoint = getOEmbedEndpoint(url);
  if (knownEndpoint) {
    const response = await fetch(knownEndpoint, {signal});
    if (!response.ok) throw new Error(`oEmbed request failed with status ${response.status}`);
    return response.json() as Promise<OEmbedResponse>;
  }

  // Probe well-known paths on the provider's own origin
  let origin: string;
  try {
    origin = new URL(url).origin;
  } catch {
    throw new Error(`Invalid URL: ${url}`);
  }
  for (const path of WELL_KNOWN_PATHS) {
    const probeUrl = `${origin}${path}?url=${encodeURIComponent(url)}&format=json`;
    try {
      const response = await fetch(probeUrl, {signal});
      if (response.ok) return response.json() as Promise<OEmbedResponse>;
    } catch {
      // CORS or network error – try next path
    }
  }
  throw new Error(`No oEmbed provider found for URL: ${url}`);
}
