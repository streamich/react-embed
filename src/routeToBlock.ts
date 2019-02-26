import {Blocks, ReactEmbedRouter, ParsedUrl} from '.';

const routeTwitter: ReactEmbedRouter = (blocks, {pathname}) => {
  const steps = pathname.split('/');
  if (!steps.length) return undefined;
  // tslint:disable-next-line
  return [blocks['tweet'], steps[steps.length - 1]];
};

const routeYouTube: ReactEmbedRouter = (blocks, {search}) => {
  const matches = search.match(/v=([^\&]+)(&|$)/);
  if (!matches) return undefined;
  // tslint:disable-next-line
  return [blocks['youtube'], matches[1]];
};

const routeToBlock: ReactEmbedRouter = (blocks: Blocks, parsed: ParsedUrl) => {
  const {hostname, pathname, search} = parsed;

  switch (hostname) {
    case 'twitter.com':
      return routeTwitter(blocks, parsed);
    case 'www.youtube.com':
    case 'youtube.com':
      return routeYouTube(blocks, parsed);
    case 'soundcloud.com':
      // tslint:disable-next-line
      return [blocks['soundcloud'], ''];
    case 'vimeo.com':
      return [blocks.vimeo, ''];
    default:
      return undefined;
  }
};

export default routeToBlock;
