import * as React from 'react';
import {storiesOf} from '@storybook/react';
import ReactEmbed from '..';

storiesOf('Demo', module)
  .add('Default', () => {
    return (
      <ReactEmbed />
    );
  });
