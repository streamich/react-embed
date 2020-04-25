import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Embed from '..';
import {Box} from './Box';

storiesOf('tweet', module)
  .add('Default', () => {
    return <Embed url={'https://twitter.com/hercuppacoffee/status/911958476678561792'} />;
  })
  .add('Fitted', () => {
    return (
      <Box>
        <Embed url={'https://twitter.com/hercuppacoffee/status/911958476678561792'} />
      </Box>
    );
  })
  .add('[isDark]', () => {
    return <Embed url={'https://twitter.com/hercuppacoffee/status/911958476678561792'} isDark />;
  });
