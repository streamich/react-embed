import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Embed from '..';

storiesOf('replit', module)
  .add('Site link', () => <Embed url={'https://repl.it/@VadimsDaleckis/AwesomeHiddenPublisher'} />)
