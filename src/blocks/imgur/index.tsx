import * as React from 'react';
import {BlockProps} from '../..';

export interface ImgurState {
  height: number;
}

class Imgur extends React.Component<BlockProps, ImgurState> {
  state: ImgurState = {
    height: 0,
  };
  mounted = false;

  componentDidMount () {
    this.mounted = true;
    window.addEventListener('message', this.onMessage);
  }

  componentWillUnmount () {
    this.mounted = false;
    window.removeEventListener('message', this.onMessage);
  }

  // Below listens to messages from imgur to find embed height.
  onMessage = ({data}) => {
    if (!this.mounted) return;
    if(typeof data !== 'string') return;
    try {
      const json = JSON.parse(data);
      if((json.message !== 'resize_imgur')) return;
      if(typeof json.href !== 'string') return;
      if(json.href !== this.src()) return;
      if(typeof json.height !== 'number') return;
      this.setState({height: json.height});
    } catch {}
  };

  src () {
    return `https://imgur.com/a/5ejrmYX/embed?pub=true&w=340`;
  }

  render () {
    const {state} = this;

    return (
      <div style={{maxWidth:'100%', overflow:'hidden', padding:5}}>
        <iframe
          scrolling="no"
          frameBorder='0'
          src={this.src()}
          style={{
            height: state.height || 500,
            width: 540,
            maxWidth: 540,
            border: 0,
            borderRadius: '2px',
            boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.10)',
          }}
        />
      </div>
    );
  }
}

export default Imgur;
