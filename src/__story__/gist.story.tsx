import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Embed from '..';
import {Box} from './Box';

storiesOf('gist', module)
  .add('Site link', () => <Embed url={'https://gist.github.com/derrickturk/156b06d3a8496cc15fcab587e7881073'} />)
  .add('Three links', () => (
    <div>
      <Embed url={'https://gist.github.com/derrickturk/156b06d3a8496cc15fcab587e7881073'} />
      <Embed url={'https://gist.github.com/rikniitt/d32c9ed81ce72acf23a6d8fb12d95e6f'} />
      <Embed url={'https://gist.github.com/choco-bot/c588cdb67a420b21133f30f3e5645b22'} />
    </div>
  ))
  .add('Fitted', () => {
    return (
      <Box>
        <Embed url={'https://gist.github.com/derrickturk/156b06d3a8496cc15fcab587e7881073'} />
      </Box>
    );
  });
