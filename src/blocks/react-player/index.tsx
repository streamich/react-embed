import * as React from 'react';
import {BlockProps} from '../..';
import ReactPlayer from 'react-player'

const ReactPlayerWrapper: React.SFC<BlockProps> = ({url}) => {
  return (
    <ReactPlayer url={url} />
  );
}

export default ReactPlayerWrapper;
