import * as React from 'react';
import {BlockProps} from '../..';
import ReactPlayer from 'react-player';

const style = {
  maxWidth: '100%',
};

const ReactPlayerWrapper: React.SFC<BlockProps> = ({url, renderWrap}) => {
  return renderWrap(<ReactPlayer url={url} style={style} controls={true} volume={1} />);
};

export default ReactPlayerWrapper;
