import * as React from 'react';
import {BlockProps} from '../..';
import {Player} from 'react-simple-player';

const SimplePlayerWrapper: React.FC<BlockProps> = ({url, width, renderWrap}) => {
  return renderWrap(<Player src={url} height={50} hideVolume={width < 500} />);
};

export default SimplePlayerWrapper;
