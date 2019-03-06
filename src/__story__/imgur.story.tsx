import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Embed from '..';

storiesOf('imgur', module)
  .add('Default', () => {
    return (
      <Embed url={'https://imgur.com/gallery/5ejrmYX'} />
    );
  });
