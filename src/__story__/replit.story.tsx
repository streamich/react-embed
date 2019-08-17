import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Embed from '..';
import {Box} from './Box';

storiesOf('replit', module)
  .add('Site link', () => <Embed url={'https://repl.it/@VadimsDaleckis/AwesomeHiddenPublisher'} />)
  .add('Fitted', () => {
    return (
      <Box>
        <Embed url={'https://repl.it/@VadimsDaleckis/AwesomeHiddenPublisher'} />
      </Box>
    );
  });
