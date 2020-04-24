import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Embed from '..';

storiesOf('react-simple-player', module).add('.mp3', () => {
  return <Embed url={'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3'} />;
});
