import * as React from 'react';
import {BlockProps} from '../..';
import ReactPlayer from 'react-player'

const style = {
  maxWidth: '100%',
};

const ReactPlayerWrapper: React.SFC<BlockProps> = ({url}) => {
  return (
    <ReactPlayer url={url} style={style} />
  );
}

export default ReactPlayerWrapper;
