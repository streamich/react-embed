import * as React from 'react';
import {BlockProps} from '../..';
import ReactPlayer from 'react-player';

const style = {
  maxWidth: '100%',
};

const ReactPlayerWrapper: React.SFC<BlockProps> = ({url, renderWrap, options}) => {
  return renderWrap(<ReactPlayer {...options} url={url} style={style} />);
};

export default ReactPlayerWrapper;
