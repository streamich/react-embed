import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Embed from '..';
import {Box} from './Box';

storiesOf('gfycat', module)
  .add('Site link', () => <Embed url={'https://gfycat.com/snivelingflimsyfunnelweaverspider'} />)
  .add('Site link - 2', () => <Embed url={'https://gfycat.com/bittervainchuckwalla-airplane-transportation'} />)
  .add('Fitted', () => {
    return (
      <Box>
        <Embed url={'https://gfycat.com/snivelingflimsyfunnelweaverspider'} />
      </Box>
    );
  });
