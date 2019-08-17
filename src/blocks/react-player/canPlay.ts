const MATCH_URL_FILE = /\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx|mp4|og[gv]|webm|mov|m4v|m3u8|mpd)($|\?)/i;
const canPlayFile = (url) => MATCH_URL_FILE.test(url);

// const MATCH_URL_YOUTUBE = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=/
// const canPlayYoutube = url => MATCH_URL_YOUTUBE.test(url);

const MATCH_URL_FACEBOOK = /facebook\.com\/([^/?].+\/)?video(s|\.php)[/?].*$/;
const canPlayFacebook = (url) => MATCH_URL_FACEBOOK.test(url);

const MATCH_VIDEO_URL_TWITCH = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;
const MATCH_CHANNEL_URL_TWITCH = /(?:www\.|go\.)?twitch\.tv\/([a-z0-9_]+)($|\?)/;
const canPlayTwitch = (url) => MATCH_VIDEO_URL_TWITCH.test(url) || MATCH_CHANNEL_URL_TWITCH.test(url);

const MATCH_URL_DAILY_MOTION = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?$/;
const canPlayDailyMotion = (url) => MATCH_URL_DAILY_MOTION.test(url);

const MATCH_URL_VIMEO = /vimeo\.com\/.+/;
const MATCH_FILE_URL_VIMEO = /vimeo\.com\/external\/.+\.mp4/;
const canPlayVimeo = (url) => {
  if (MATCH_FILE_URL_VIMEO.test(url)) {
    return false;
  }
  return MATCH_URL_VIMEO.test(url);
};

const MATCH_URL_MIXCLOUD = /mixcloud\.com\/([^/]+\/[^/]+)/;
const canPlayMixcloud = (url) => MATCH_URL_MIXCLOUD.test(url);

// const MATCH_URL_SOUNDCLOUD = /(soundcloud\.com|snd\.sc)\/.+$/;
// const canPlaySoundcloud = url => MATCH_URL_SOUNDCLOUD.test(url);

const MATCH_URL_STREAMABLE = /streamable\.com\/([a-z0-9]+)$/;
const canPlayStreamable = (url) => MATCH_URL_STREAMABLE.test(url);

// const MATCH_URL_WISTIA = /(?:wistia\.com|wi\.st)\/(?:medias|embed)\/(.*)$/;
// const canPlayWistia = url => MATCH_URL_WISTIA.test(url);

const canPlay = (url: string): boolean =>
  // canPlayYoutube(url) ||
  canPlayFacebook(url) ||
  canPlayTwitch(url) ||
  canPlayDailyMotion(url) ||
  canPlayVimeo(url) ||
  canPlayMixcloud(url) ||
  // canPlaySoundcloud(url) ||
  canPlayStreamable(url) ||
  // canPlayWistia(url) ||
  canPlayFile(url);

export default canPlay;
