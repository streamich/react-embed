import * as React from 'react';
import {BlockProps} from '../..';
import ReactPlayer from 'react-player';

const style = {
  maxWidth: '100%',
};

const ReactPlayerWrapper: React.FC<BlockProps> = ({url, renderWrap}) => {
  const C = ReactPlayer as any;

  return renderWrap(<C url={url} style={style} controls={true} volume={1} />);
};

export default ReactPlayerWrapper;
