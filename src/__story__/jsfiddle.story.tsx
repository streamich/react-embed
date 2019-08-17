import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Embed from '..';
import {Box} from './Box';

storiesOf('jsfiddle', module)
  .add('Default', () => {
    return <Embed url={'https://jsfiddle.net/0qmyaudr/'} />;
  })
  .add('Fitted', () => {
    return (
      <Box>
        <Embed url={'https://jsfiddle.net/0qmyaudr/'} />
      </Box>
    );
  });
