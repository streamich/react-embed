import * as React from 'react';
import {BlockProps} from '../..';
import InstagramEmbed from 'react-instagram-embed';

const Instagram: React.SFC<BlockProps> = ({url}) => {
  return (
    <InstagramEmbed
      url={url}
      maxWidth={320}
      hideCaption={false}
      containerTagName="div"
      protocol=""
      injectScript
      onLoading={() => {}}
      onSuccess={() => {}}
      onAfterRender={() => {}}
      onFailure={() => {}}
    />
  );
};

export default Instagram;
