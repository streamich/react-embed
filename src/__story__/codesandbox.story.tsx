import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Embed from '..';
import {Box} from './Box';

storiesOf('codesandbox', module)
  .add('Default', () => {
    return <Embed url={'https://codesandbox.io/embed/react-new?fontsize=14&hidenavigation=1&theme=dark'} />;
  })
  .add('Fitted', () => {
    return (
      <Box>
        <Embed url={'https://codesandbox.io/embed/react-new?fontsize=14&hidenavigation=1&theme=dark'} />
      </Box>
    );
  });
