import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Embed from '..';
import {Box} from './Box';

storiesOf('youtube', module)
  .add('Default', () => {
    return <Embed url={'https://www.youtube.com/watch?v=soICQ3B2kEk'} />;
  })
  .add('Fitted', () => {
    return (
      <Box>
        <Embed url={'https://www.youtube.com/watch?v=soICQ3B2kEk'} />
      </Box>
    );
  })
  .add('Shortened URL', () => {
    return (
      <Box>
        <Embed url={'https://youtu.be/soICQ3B2kEk'} />
      </Box>
    );
  });
