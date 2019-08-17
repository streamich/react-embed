import * as React from 'react';
import {BlockProps} from '../..';
import ReactPlayer from 'react-player';

const Vimeo: React.SFC<BlockProps> = ({url}) => {
  return <ReactPlayer url={url} />;
};

export default Vimeo;
