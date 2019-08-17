import * as React from 'react';
import {BlockProps} from '../..';

export interface SoundCloudProps extends BlockProps {
  autoplay?: boolean;
  hideRelated?: boolean;
  showComments?: boolean;
  showUser?: boolean;
  showReposts?: boolean;
  isVisual?: boolean;
}

const SoundCloud: React.SFC<SoundCloudProps> = ({
  url,
  autoplay,
  hideRelated,
  showComments,
  showUser,
  showReposts,
  isVisual,
  renderWrap,
}) => {
  const src =
    `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}` +
    '&amp;auto_play=' +
    !!autoplay +
    '&amp;hide_related=' +
    !hideRelated +
    '&amp;show_comments=' +
    !!showComments +
    '&amp;show_user=' +
    !showUser +
    '&amp;show_reposts=' +
    !!showReposts +
    '&amp;visual=' +
    !isVisual;

  return renderWrap(
    <iframe width="100%" height="200" scrolling="no" frameBorder="no" style={{margin: 0, padding: 0}} src={src} />,
  );
};

export default SoundCloud;
