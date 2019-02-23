import * as React from 'react';
import {TwitterTweetEmbed} from 'react-twitter-embed';
import {BlockProps} from '../..';

const Tweet: React.SFC<BlockProps> = ({id}) => {
  return (
    <TwitterTweetEmbed tweetId={id} />
  );
}

export default Tweet;
