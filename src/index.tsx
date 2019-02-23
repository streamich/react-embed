import * as React from 'react';
import Tweet from './blocks/tweet';
import defaultRouter from './routeToBlock';

const IS_BROWSER = typeof window === 'object';

export interface ParsedUrl {
  url: string;
  hostname: string;
  pathname: string;
  search: string;
  hash: string;
}

export type EmbedBlockId = string;
export interface BlockProps extends ParsedUrl {
  id: EmbedBlockId;
}

export interface Blocks {
  [name: string]: React.ComponentType<BlockProps>;
}

const defaultBlocks: Blocks = {
  tweet: Tweet,
};

export type ReactEmbedRouter = (blocks: Blocks, url: ParsedUrl) => undefined | [undefined | React.ComponentType<BlockProps>, EmbedBlockId];

export interface ReactEmbedProps {
  url: string;
  blocks?: Blocks;
  router?: ReactEmbedRouter;
}

export interface ReactEmbedState {
  url?: ParsedUrl;
}

export class ReactEmbed extends React.PureComponent<ReactEmbedProps, ReactEmbedState> {
  static defaultProps = {
    blocks: defaultBlocks,
    router: defaultRouter,
  };

  static getDerivedStateFromProps (props) {
    if (!IS_BROWSER) return null;

    if (typeof props.url === 'string') {
      const url = new URL(props.url);
      const {hostname, pathname, search, hash} = url;
      return {
        url: {
          url: props.url,
          hostname,
          pathname,
          search,
          hash,
        },
      };
    } else {
      return undefined;
    }
  }

  state: ReactEmbedState = {};

  url: undefined | ParsedUrl;

  render () {
    if (!IS_BROWSER) return null;

    const result = this.props.router!(this.props.blocks!, this.state.url!);

    if (!result || !result[0]) {
      return null;
    }

    const [Block, id] = result as any;

    return <Block {...this.state.url} id={id} />;
  }
}

export default ReactEmbed;
