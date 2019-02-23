import * as React from 'react';
import defaultRouter from './routeToBlock';
import defaultRender from './renderer';

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
  tweet: React.lazy(() => import('./blocks/tweet')),
  youtube: React.lazy(() => import('./blocks/youtube')),
};

export type ReactEmbedRouterResult = undefined | [undefined | React.ComponentType<BlockProps>, EmbedBlockId];
export type ReactEmbedRouter = (blocks: Blocks, url: ParsedUrl) => ReactEmbedRouterResult;
export type ReactEmbedRenderer = (block: React.ComponentType<BlockProps>, id: EmbedBlockId, props: ReactEmbedProps, state: ReactEmbedState) => React.ReactElement<any>;

const defaultLoadingRenderer = () => null;

export interface ReactEmbedProps {
  url: string;
  blocks?: Blocks;
  router?: ReactEmbedRouter;
  render?: ReactEmbedRenderer;
  renderLoading?: ReactEmbedRenderer;
}

export interface ReactEmbedState {
  url?: ParsedUrl;
}

export class ReactEmbed extends React.PureComponent<ReactEmbedProps, ReactEmbedState> {
  static defaultProps = {
    blocks: defaultBlocks,
    router: defaultRouter,
    render: defaultRender,
    renderLoading: defaultLoadingRenderer,
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

    let result: ReactEmbedRouterResult
    try {
      result = this.props.router!(this.props.blocks!, this.state.url!);
    } catch (error) {
      // NOTE: This should never happen (hopefully).
      // tslint:disable-next-line no-console
      console.error('Could not route block:', error);
      return null;
    }

    if (!result || !result[0]) {
      return null;
    }

    const [Block, id] = result as any;
    return this.props.render!(Block, id, this.props, this.state);
  }
}

export default ReactEmbed;
