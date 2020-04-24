import * as React from 'react';
import {BlockProps} from '../..';
import {Player} from 'react-simple-player';

const SimplePlayerWrapper: React.SFC<BlockProps> = ({url, renderWrap}) => {
  return renderWrap(<Player src={url} height={50} />);
};

export default SimplePlayerWrapper;
