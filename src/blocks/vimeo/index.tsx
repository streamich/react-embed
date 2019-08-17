import * as React from 'react';
import {BlockProps} from '../..';
import ReactPlayer from 'react-player';

const Vimeo: React.SFC<BlockProps> = ({url, renderWrap}) => {
  return renderWrap(<ReactPlayer url={url} />);
};

export default Vimeo;
