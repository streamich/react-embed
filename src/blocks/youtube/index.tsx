import * as React from 'react';
import YouTube from 'react-youtube';
import {BlockProps} from '../..';

const Y = YouTube as any;

const YouTubeWrapper: React.SFC<BlockProps> = ({id}) => {
  return (
    <Y videoId={id} />
  );
}

export default YouTubeWrapper;
