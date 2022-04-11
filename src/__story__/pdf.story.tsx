import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Embed from '..';
import {Box} from './Box';

const pdf = 'https://www.africau.edu/images/default/sample.pdf';

storiesOf('PDF', module)
  .add('A pdf file', () => {
    return <Embed url={pdf} />;
  })
  .add('Fitted', () => {
    return (
      <Box>
        <Embed url={pdf} />
      </Box>
    );
  });
