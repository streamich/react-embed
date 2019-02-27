import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Embed from '..';

storiesOf('vimeo', module)
  .add('Default', () => {
    return (
      <Embed url={'https://vimeo.com/54763818'} />
    );
  })
  .add('"The music scene"', () => {
    return (
      <Embed url={'https://vimeo.com/12622016'} />
    );
  })
