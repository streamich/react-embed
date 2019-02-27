import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Embed from '..';

storiesOf('youtube', module)
  .add('Default', () => {
    return (
      <Embed url={'https://www.youtube.com/watch?v=soICQ3B2kEk'} />
    );
  });
