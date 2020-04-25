import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Embed from '..';

storiesOf('react-simple-player/format', module)
  .add('.mp3', () => {
    return <Embed url={'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3'} />;
  })
  .add('.wav', () => {
    return <Embed url={'https://file-examples.com/wp-content/uploads/2017/11/file_example_WAV_1MG.wav'} />;
  })
  .add('.aac', () => {
    return <Embed url={'https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.aac'} />;
  })
  .add('.m4a', () => {
    return <Embed url={'https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.m4a'} />;
  })
  .add('.mp4', () => {
    return <Embed url={'https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.mp4'} />;
  })
  .add('.ogg', () => {
    return <Embed url={'https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.ogg'} />;
  })
  .add('.opus', () => {
    return <Embed url={'https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.opus'} />;
  })
  .add('.wma', () => {
    return <Embed url={'https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.wma'} />;
  })
  .add('.mpga', () => {
    return <Embed url={'https://example-files.online-convert.com/audio/mpga/example.mpga'} />;
  })
  .add('.mp2', () => {
    return <Embed url={'https://filesamples.com/samples/audio/mp2/sample1.mp2'} />;
  });

storiesOf('react-simple-player/widths', module)
  .add('300px', () => {
    return (
      <div style={{width: 300}}>
        <Embed url={'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3'} width={300} />
      </div>
    );
  })
  .add('500px', () => {
    return (
      <div style={{width: 500}}>
        <Embed url={'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3'} width={500} />
      </div>
    );
  });

storiesOf('react-simple-player', module).add('dark mode', () => {
  return <Embed isDark url={'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3'} />;
});
