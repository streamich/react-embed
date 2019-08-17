/**
 * Original source: https://github.com/tleunen/react-gist
 * License: https://github.com/tleunen/react-gist/blob/master/LICENSE.md
 */
import * as React from 'react';
import {BlockProps} from '../../ReactEmbed';

const fontSize = 12;

// TODO: Allow user to specify `file` prop as a hash in URL.

export interface GistProps extends BlockProps {
  file?: string;
}

let idCnt = 0;

class Gist extends React.PureComponent<GistProps> {
  iframeNode: HTMLIFrameElement | null = null;
  id = 'react-embed-gist-' + idCnt++;

  componentDidMount() {
    this._updateIframeContent();
  }

  componentDidUpdate(prevProps, prevState) {
    this._updateIframeContent();
  }

  _defineUrl() {
    const {id, file} = this.props;

    const fileArg = file ? `?file=${file}` : '';

    return `https://gist.github.com/${id}.js${fileArg}`;
  }

  _updateIframeContent() {
    const iframe = this.iframeNode!;

    let doc = (iframe as any).document;
    if (iframe.contentDocument) doc = iframe.contentDocument;
    else if (iframe.contentWindow) doc = iframe.contentWindow.document;

    const gistLink = this._defineUrl();
    const gistScript = `<script type="text/javascript" src="${gistLink}"></script>`;
    const styles = `<style>*{font-size:${fontSize}px;}</style>`;
    const resizeScript = `onload="parent.document.getElementById('${this.id}').style.height=document.body.scrollHeight + 'px'"`;
    const iframeHtml = `<html><head><base target="_parent">${styles}</head><body style="margin:0" ${resizeScript}>${gistScript}</body></html>`;

    doc.open();
    doc.writeln(iframeHtml);
    doc.close();
  }

  render() {
    const {renderWrap} = this.props;

    return renderWrap(
      <iframe
        id={this.id}
        ref={(n) => {
          this.iframeNode = n;
        }}
        width="100%"
        frameBorder={0}
        style={{margin: `0 0 -${fontSize}px`}}
      />,
    );
  }
}

export default Gist;
