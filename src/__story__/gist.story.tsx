import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Embed from '..';

storiesOf('gist', module)
  .add('Site link', () => <Embed url={'https://gist.github.com/derrickturk/156b06d3a8496cc15fcab587e7881073'} />)
  .add('Two links', () => (
    <div>
      <Embed url={'https://gist.github.com/derrickturk/156b06d3a8496cc15fcab587e7881073'} />
      <Embed url={'https://gist.github.com/rikniitt/d32c9ed81ce72acf23a6d8fb12d95e6f'} />
    </div>
  ))
