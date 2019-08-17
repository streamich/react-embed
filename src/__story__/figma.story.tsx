import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Embed from '..';
import {Box} from './Box';

storiesOf('figma', module)
  .add('Site link', () => (
    <Embed url={'https://www.figma.com/file/LFRrspoKaAYUlEHLZiLoQX/Google-Material-Design?node-id=0%3A1'} />
  ))
  .add('Fitted', () => {
    return (
      <Box>
        <Embed url={'https://www.figma.com/file/LFRrspoKaAYUlEHLZiLoQX/Google-Material-Design?node-id=0%3A1'} />
      </Box>
    );
  });
