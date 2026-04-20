import * as React from 'react';
import {BlockProps} from '../..';
import {fetchOEmbed, OEmbedResponse} from './fetchOEmbed';

export {fetchOEmbed, getOEmbedEndpoint} from './fetchOEmbed';
export type {OEmbedResponse, Provider} from './fetchOEmbed';

export interface OEmbedBlockOptions {
  /**
   * When `true`, the raw HTML provided by the oEmbed provider (e.g. an
   * `<iframe>`) is injected via `dangerouslySetInnerHTML`.  Defaults to
   * `false` – a safe info-card is rendered instead.
   */
  renderHtml?: boolean;
}

const cardStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '100%',
  overflow: 'hidden',
  borderRadius: '8px',
  border: '1px solid #E5E9F2',
  fontFamily: 'sans-serif',
  background: '#fff',
};

const cardStyleDark: React.CSSProperties = {
  ...cardStyle,
  border: '1px solid #2e3440',
  background: '#2e3440',
  color: '#eceff4',
};

const thumbnailStyle: React.CSSProperties = {
  display: 'block',
  width: '100%',
  objectFit: 'cover',
  maxHeight: '240px',
};

const bodyStyle: React.CSSProperties = {
  padding: '12px 16px',
};

const providerStyle: React.CSSProperties = {
  fontSize: '11px',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  color: '#8a9ab0',
  marginBottom: '4px',
};

const titleStyle: React.CSSProperties = {
  fontSize: '15px',
  fontWeight: 600,
  margin: '0 0 4px',
  lineHeight: 1.4,
};

const authorStyle: React.CSSProperties = {
  fontSize: '12px',
  color: '#8a9ab0',
  margin: 0,
};

const anchorStyle: React.CSSProperties = {
  color: 'inherit',
  textDecoration: 'none',
};

function OEmbedCard({data, isDark, url}: {data: OEmbedResponse; isDark: boolean; url: string}) {
  const style = isDark ? cardStyleDark : cardStyle;
  const photoSrc = data.url || data.thumbnail_url;

  const thumbnail =
    data.type === 'photo' ? (
      photoSrc ? <img src={photoSrc} alt={data.title || ''} style={thumbnailStyle} /> : null
    ) : data.thumbnail_url ? (
      <img src={data.thumbnail_url} alt={data.title || ''} style={thumbnailStyle} />
    ) : null;

  return (
    <div style={style}>
      {thumbnail}
      <div style={bodyStyle}>
        {data.provider_name && (
          <p style={providerStyle}>
            {data.provider_url ? (
              <a href={data.provider_url} target="_blank" rel="noopener noreferrer" style={anchorStyle}>
                {data.provider_name}
              </a>
            ) : (
              data.provider_name
            )}
          </p>
        )}
        {data.title && (
          <p style={titleStyle}>
            <a href={url} target="_blank" rel="noopener noreferrer" style={anchorStyle}>
              {data.title}
            </a>
          </p>
        )}
        {data.author_name && (
          <p style={authorStyle}>
            {data.author_url ? (
              <a href={data.author_url} target="_blank" rel="noopener noreferrer" style={anchorStyle}>
                {data.author_name}
              </a>
            ) : (
              data.author_name
            )}
          </p>
        )}
      </div>
    </div>
  );
}

interface OEmbedBlockState {
  data: OEmbedResponse | null;
  loading: boolean;
  error: Error | null;
}

class OEmbedBlock extends React.PureComponent<BlockProps & {renderHtml: boolean}, OEmbedBlockState> {
  state: OEmbedBlockState = {data: null, loading: true, error: null};
  controller = new AbortController();

  fetchData() {
    const {signal} = this.controller;
    fetchOEmbed(this.props.url, signal)
      .then((data) => {
        if (!signal.aborted) this.setState({data, loading: false, error: null});
      })
      .catch((error) => {
        if (!signal.aborted) this.setState({data: null, error, loading: false});
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps: BlockProps & {renderHtml: boolean}) {
    if (prevProps.url !== this.props.url) {
      this.controller.abort();
      this.controller = new AbortController();
      this.setState({data: null, loading: true, error: null}, () => this.fetchData());
    }
  }

  componentWillUnmount() {
    this.controller.abort();
  }

  render() {
    const {renderWrap, renderVoid, renderHtml, isDark, url} = this.props;
    const {data, loading, error} = this.state;

    if (loading) return renderWrap(null);
    if (error || !data) return renderVoid(error || undefined);

    if (renderHtml && data.html) {
      // Opt-in: inject the provider's own HTML (e.g. an <iframe>). Caller accepts XSS risk.
      return renderWrap(<div dangerouslySetInnerHTML={{__html: data.html}} />);
    }

    return renderWrap(<OEmbedCard data={data} isDark={isDark} url={url} />);
  }
}

/**
 * Creates an oEmbed block component.
 *
 * ```tsx
 * // Default – renders a safe info-card
 * <ReactEmbed url="https://www.flickr.com/photos/bees/2362225867/" />
 *
 * // Opt-in HTML rendering (injects the provider's <iframe>; caller accepts XSS risk)
 * const blocks = { ...defaultBlocks, oembed: createOEmbedBlock({ renderHtml: true }) };
 * <ReactEmbed url="https://www.flickr.com/photos/bees/2362225867/" blocks={blocks} />
 * ```
 */
export function createOEmbedBlock(options: OEmbedBlockOptions = {}): React.ComponentType<BlockProps> {
  const {renderHtml = false} = options;
  const Block: React.FC<BlockProps> = (props) => <OEmbedBlock {...props} renderHtml={renderHtml} />;
  return Block;
}

export default createOEmbedBlock();
