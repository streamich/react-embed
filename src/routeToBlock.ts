import {Blocks, ReactEmbedRouter, ParsedUrl} from '.';
import canPlay from './blocks/react-player/canPlay';

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

const routeJsFiddle: ReactEmbedRouter = (blocks, {pathname}) => {
  const steps = pathname.split('/');
  if (steps.length < 2) return undefined;
  return [blocks.jsfiddle, steps[1]];
};

const routeToBlock: ReactEmbedRouter = (blocks: Blocks, parsed: ParsedUrl) => {
  const {hostname, url} = parsed;

  switch (hostname) {
    case 'twitter.com':
      return routeTwitter(blocks, parsed);
    case 'www.youtube.com':
    case 'youtube.com':
      return routeYouTube(blocks, parsed);
    case 'soundcloud.com':
      return [blocks.soundcloud, ''];
    case 'jsfiddle.net':
      return routeJsFiddle(blocks, parsed);
    case 'imgur.com':
      return [blocks.imgur, ''];
    default:
      if (canPlay(url)) {
        return [blocks.reactPlayer, ''];
      } else {
        return undefined;
      }
  }
};

export default routeToBlock;
