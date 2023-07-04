import * as React from 'react';
import Embed from '..';
import {Box} from './Box';

export default {
  component: Embed,
  title: 'codesandbox',
  args: {
    url: 'https://codesandbox.io/embed/react-new?fontsize=14&hidenavigation=1&theme=dark',
  },
};

export const Default = {
  args: {},
};

export const Fitted = {
  args: {},
  decorators: [
    (Story) => (
      <Box>
        <Story />
      </Box>
    )
  ],
};
