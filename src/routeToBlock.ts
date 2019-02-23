import {Blocks, ReactEmbedRouter, ParsedUrl} from '.';

const routeToBlock: ReactEmbedRouter = (blocks: Blocks, {hostname, pathname, search}: ParsedUrl) => {
  try {
    if (hostname === 'twitter.com') {
      const steps = pathname.split('/');
      if (!steps.length) return undefined;
      // tslint:disable-next-line
      return [blocks['tweet'], steps[steps.length - 1]];
    } else if (hostname === 'www.youtube.com') {
      const matches = search.match(/v=([^\&]+)(&|$)/);
      if (!matches) return undefined;
      // tslint:disable-next-line
      return [blocks['youtube'], matches[1]];
    } else {
      return undefined;
    }
  } catch (error) {
    // NOTE: This should never happen.
    // tslint:disable-next-line no-console
    console.error('Could not route block:', error);
    return undefined;
  }
};

export default routeToBlock;
