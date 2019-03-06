import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Embed from '..';

storiesOf('gfycat', module)
  .add('Site link', () => <Embed url={'https://gfycat.com/snivelingflimsyfunnelweaverspider'} />)
  .add('Site link - 2', () => <Embed url={'https://gfycat.com/bittervainchuckwalla-airplane-transportation'} />)
