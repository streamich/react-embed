import * as React from 'react';
import Embed from '..';
import {Box} from './Box';

const urls = [
  'https://codesandbox.io/embed/react-new?fontsize=14&hidenavigation=1&theme=dark',
  'https://www.figma.com/file/LFRrspoKaAYUlEHLZiLoQX/Google-Material-Design?node-id=0%3A1',
  'https://gfycat.com/snivelingflimsyfunnelweaverspider',
  'https://gfycat.com/bittervainchuckwalla-airplane-transportation',
  'https://gist.github.com/derrickturk/156b06d3a8496cc15fcab587e7881073',
  'https://gist.github.com/rikniitt/d32c9ed81ce72acf23a6d8fb12d95e6f',
  'https://www.google.com/maps/@46.5084367,6.5426424,15z',
  'https://www.google.com/maps/place/London,+UK/@51.5140318,-0.3089719,11z/data=!4m5!3m4!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5073509!4d-0.1277583',
  'https://imgur.com/gallery/5ejrmYX',
  'https://imgur.com/a/5ejrmYX/embed?pub=true&w=340',
  'https://www.instagram.com/p/B-b9FjGA6hR/',
  'https://jsfiddle.net/0qmyaudr/',
  'http://www.africau.edu/images/default/sample.pdf',
  'https://www.facebook.com/OddCouplesDodo/videos/2002998246626642/',
  'https://www.twitch.tv/videos/1859817989',
  'https://www.dailymotion.com/video/x75y5s2?playlist=x63vyg',
  'https://vimeo.com/54763818',
  'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3',
  'https://file-examples.com/wp-content/uploads/2017/11/file_example_WAV_1MG.wav',
  'https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.aac',
  'https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.m4a',
  'https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.mp4',
  'https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.ogg',
  'https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.opus',
  'https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.wma',
  'https://example-files.online-convert.com/audio/mpga/example.mpga',
  'https://filesamples.com/samples/audio/mp2/sample1.mp2',
  'https://repl.it/@VadimsDaleckis/AwesomeHiddenPublisher',
  'https://soundcloud.com/user-515768487/im-a-creeper-boom-boom-boom',
  'https://twitter.com/hercuppacoffee/status/911958476678561792',
  'https://vimeo.com/54763818',
  'https://vimeo.com/12622016',
  'https://www.dropbox.com/s/u0bdwmkjmqld9l2/dbx-supporting-distributed-work.gif?dl=0',
  'https://www.dropbox.com/s/cla7asg2zjzscpd/CV%20VC%20Top%2050%20Report%202021%20V1.pdf?dl=0'
];

export default {
  component: Embed,
  title: '<ReactEmbed>',
  tags: ['autodocs'],
  args: {
    url: 'https://soundcloud.com/user-515768487/im-a-creeper-boom-boom-boom',
  },
};

export const Default = {
  args: {},
  argTypes: {
    url: {
      options: urls,
      control: { type: 'select' },
    },
  },
};

export const Fitted = {
  args: {},
  argTypes: {
    url: {
      options: urls,
      control: { type: 'select' },
    },
  },
  decorators: [
    (Story) => (
      <Box>
        <Story />
      </Box>
    )
  ],
};

export const Fallback = {
  args: {
    fallback: 'This is fallback',
    url: 'https://gist.github.com/derrickturk/156b06d3a8496cc15fcab587e7881073',
  },
};

export const InvalidUrl = {
  args: {
    url: 'asdf',
    renderVoid: (props, state, error) => <div>Error: {error ? error.message : ''}</div>,
  },
};

export const UnknownBlock = {
  args: {
    url: 'http://localhost:6010',
    renderVoid: (props, state, error) => <div>Error: {error ? error.message : ''}</div>,
  },
};

export const RouterError = {
  args: {
    url: 'http://localhost:6010',
    router: () => {
      throw new Error('foo');
    },
    renderVoid: (props, state, error) => <div>Error: {error ? error.message : ''}</div>,
  },
};

export const Wrapper = {
  args: {
    url: 'https://gist.github.com/derrickturk/156b06d3a8496cc15fcab587e7881073',
    fallback: 'This is fallback',
    renderWrapper: (children) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '1px solid red',
        }}
      >
        {children}
      </div>
    ),
  },
};
