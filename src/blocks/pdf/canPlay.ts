const MATCH_PDF_FILE = /\.(pdf)($|\?)/i;
const canPlay = (url: string): boolean => MATCH_PDF_FILE.test(url);

export default canPlay;
