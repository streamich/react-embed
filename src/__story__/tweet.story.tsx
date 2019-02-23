import * as React from 'react';
import {storiesOf} from '@storybook/react';
import ReactEmbed from '..';

storiesOf('tweet', module)
  .add('Default', () => {
    return (
      <ReactEmbed url={'https://twitter.com/Tidjani_B/status/1035507837177405440'} />
    );
  });
