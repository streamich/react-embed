import * as React from 'react';
import {BlockProps} from '../..';

const styles: {[name: string]: React.CSSProperties} = {
  block: {
    position: 'relative',
    paddingBottom: '56.25%',
    height: 0,
  },
  iframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
};

const JsFiddle: React.SFC<BlockProps> = ({id}) => {
  return (
    <div style={styles.block}>
      <iframe
        style={styles.iframe}
        src={`https://jsfiddle.net/${id}/embedded/`}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
}

export default JsFiddle;
