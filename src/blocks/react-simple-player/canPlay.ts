const MATCH_AUDIO_FILE = /\.(mp3|wav|weba|aac|oga|m4a|mp4|ogg|opus|ts|wma|mpga)($|\?)/i;
const canPlay = (url: string): boolean => MATCH_AUDIO_FILE.test(url);

export default canPlay;
