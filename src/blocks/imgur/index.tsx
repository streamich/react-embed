import * as React from 'react';
import {BlockProps} from '../..';

const blockStyle = {
  width: 350,
  overflow: 'hidden',
  borderRadius: '6px',
  display: 'block',
};

const iframeStyle = {
  width: '100%',
  display: 'block',
  overflow: 'hidden',
  borderRadius: '8px',
};

export interface ImgurState {
  height: number;
}

class Imgur extends React.Component<BlockProps, ImgurState> {
  state: ImgurState = {
    height: 0,
  };
  mounted = false;

  componentDidMount() {
    this.mounted = true;
    window.addEventListener('message', this.onMessage);
  }

  componentWillUnmount() {
    this.mounted = false;
    window.removeEventListener('message', this.onMessage);
  }

  // Below listens to messages from imgur to find embed height.
  onMessage = ({data}) => {
    if (!this.mounted) return;
    if (typeof data !== 'string') return;
    try {
      const json = JSON.parse(data);
      if (json.message !== 'resize_imgur') return;
      if (typeof json.href !== 'string') return;
      if (json.href !== this.src()) return;
      if (typeof json.height !== 'number') return;
      this.setState({height: json.height});
    } catch {}
  };

  src() {
    return `https://imgur.com/a/${this.props.id}/embed?pub=true&w=340`;
  }

  render() {
    const {state} = this;
    const height = state.height || 0;

    return this.props.renderWrap(
      <div style={{...blockStyle, border: height ? '1px solid #E5E9F2' : ''}}>
        <iframe scrolling="no" frameBorder="0" src={this.src()} style={{...iframeStyle, height}} />
      </div>,
    );
  }
}

export default Imgur;
