import * as React from 'react';
import {storiesOf} from '@storybook/react';
import ReactEmbed from '..';

storiesOf('youtube', module)
  .add('Default', () => {
    return (
      <ReactEmbed url={'https://www.youtube.com/watch?v=soICQ3B2kEk'} />
    );
  });
