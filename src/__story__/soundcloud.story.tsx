import * as React from 'react';
import {storiesOf} from '@storybook/react';
import ReactEmbed from '..';

storiesOf('soundcloud', module)
  .add('Default', () => {
    return (
      <ReactEmbed url={'https://soundcloud.com/s1sh1/kravts-glupyy-molodoy-na-meli'} />
    );
  });
