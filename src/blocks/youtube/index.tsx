import * as React from 'react';
import YouTube from 'react-youtube';
import {BlockProps} from '../..';
import {rule} from 'p4-css';

const blockClass = rule({
  w: '100%',
});

const iframeClass = rule({
  d: 'block',
  maxW: '100%',
  w: '100%',
});

const Y = YouTube as any;

const YouTubeWrapper: React.FC<BlockProps> = ({id, renderWrap}) => {
  return renderWrap(<Y videoId={id} containerClassName={blockClass} className={iframeClass} />);
};

export default YouTubeWrapper;
