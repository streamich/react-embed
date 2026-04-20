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

interface Provider {
  patterns: RegExp[];
  endpoint: string;
}

const PROVIDERS: Provider[] = [
  {
    patterns: [/youtube\.com/, /youtu\.be/],
    endpoint: 'https://www.youtube.com/oembed',
  },
  {
    patterns: [/vimeo\.com/],
    endpoint: 'https://vimeo.com/api/oembed.json',
  },
  {
    patterns: [/twitter\.com/, /x\.com/],
    endpoint: 'https://publish.twitter.com/oembed',
  },
  {
    patterns: [/soundcloud\.com/],
    endpoint: 'https://soundcloud.com/oembed',
  },
  {
    patterns: [/instagram\.com/],
    endpoint: 'https://api.instagram.com/oembed/',
  },
  {
    patterns: [/flickr\.com/],
    endpoint: 'https://www.flickr.com/services/oembed/',
  },
  {
    patterns: [/open\.spotify\.com/],
    endpoint: 'https://open.spotify.com/oembed',
  },
  {
    patterns: [/reddit\.com/],
    endpoint: 'https://www.reddit.com/oembed',
  },
  {
    patterns: [/tiktok\.com/],
    endpoint: 'https://www.tiktok.com/oembed',
  },
  {
    patterns: [/codepen\.io/],
    endpoint: 'https://codepen.io/api/oembed',
  },
  {
    patterns: [/dailymotion\.com/],
    endpoint: 'https://www.dailymotion.com/services/oembed',
  },
  {
    patterns: [/giphy\.com/],
    endpoint: 'https://giphy.com/services/oembed',
  },
];

/**
 * Returns the oEmbed JSON endpoint URL for a given page URL,
 * or `null` if no provider is registered for that URL.
 */
export function getOEmbedEndpoint(url: string): string | null {
  for (const provider of PROVIDERS) {
    if (provider.patterns.some((p) => p.test(url))) {
      return `${provider.endpoint}?url=${encodeURIComponent(url)}&format=json`;
    }
  }
  return null;
}

/**
 * Fetches oEmbed metadata for the given page URL.
 * Throws if no provider is found or the request fails (e.g. due to CORS).
 */
export async function fetchOEmbed(url: string, signal?: AbortSignal): Promise<OEmbedResponse> {
  const endpoint = getOEmbedEndpoint(url);
  if (!endpoint) {
    throw new Error(`No oEmbed provider found for URL: ${url}`);
  }
  const response = await fetch(endpoint, {signal});
  if (!response.ok) {
    throw new Error(`oEmbed request failed with status ${response.status}`);
  }
  return response.json() as Promise<OEmbedResponse>;
}
