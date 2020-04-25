import * as React from 'react';
import {BlockProps} from '../..';
import {Player} from 'react-simple-player';

const SimplePlayerWrapper: React.FC<BlockProps> = ({url, isDark, width, renderWrap}) => {
  return renderWrap(
    <Player src={url} height={50} hideVolume={width < 500} grey={isDark ? [20, 23, 26] : [240, 243, 246]} />,
  );
};

export default SimplePlayerWrapper;
