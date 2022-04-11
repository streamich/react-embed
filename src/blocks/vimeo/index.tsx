import * as React from 'react';
import {BlockProps} from '../..';
import ReactPlayer from 'react-player';

const Vimeo: React.FC<BlockProps> = ({url, renderWrap}) => {
  const C = ReactPlayer as any;

  return renderWrap(<C url={url} />);
};

export default Vimeo;
