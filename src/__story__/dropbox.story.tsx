import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Embed from '..';
import {Box} from './Box';

const url = 'https://www.dropbox.com/s/cla7asg2zjzscpd/CV%20VC%20Top%2050%20Report%202021%20V1.pdf?dl=0';

storiesOf('Dropbox', module)
  .add('A pdf file', () => {
    return <Embed url={url} />;
  })
  .add('Fitted', () => {
    return (
      <Box>
        <Embed url={url} />
      </Box>
    );
  });
