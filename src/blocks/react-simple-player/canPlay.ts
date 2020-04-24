const MATCH_AUDIO_FILE = /\.(mp3|wav|weba|aac|oga)($|\?)/i;
const canPlay = (url: string): boolean => MATCH_AUDIO_FILE.test(url);

export default canPlay;
