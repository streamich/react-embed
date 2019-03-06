import * as React from 'react';
import {BlockProps} from '../..';

const Figma: React.SFC<BlockProps> = ({url}) => {
  return (
    <iframe
      frameBorder="no"
      style={{border: 'none'}}
      width="100%"
      height="450px"
      src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`}
      allowFullScreen
    />
  );
}

export default Figma;
