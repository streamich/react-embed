import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Embed from '..';
import {Box} from './Box';

storiesOf('imgur', module)
  .add('Site link', () => <Embed url={'https://imgur.com/gallery/5ejrmYX'} />)
  .add('Embed link', () => <Embed url={'https://imgur.com/a/5ejrmYX/embed?pub=true&w=340'} />)
  .add('Fitted', () => {
    return (
      <Box>
        <Embed url={'https://imgur.com/a/5ejrmYX/embed?pub=true&w=340'} />
      </Box>
    );
  });
