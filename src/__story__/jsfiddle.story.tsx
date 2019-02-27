import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Embed from '..';

storiesOf('jsfiddle', module)
  .add('Default', () => {
    return (
      <Embed url={'https://jsfiddle.net/0qmyaudr/'} />
    );
  });
