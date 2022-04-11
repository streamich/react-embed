import * as React from 'react';
import {BlockProps} from '../..';
import InstagramEmbed from 'react-instagram-embed';

const Instagram: React.FC<BlockProps> = ({url, renderWrap}) => {
  const C = InstagramEmbed as any;
  
  return renderWrap(
    <C
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
    />,
  );
};

export default Instagram;
