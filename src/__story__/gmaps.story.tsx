import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Embed from '..';
import {Box} from './Box';

storiesOf('gmaps', module)
  .add('Site link', () => <Embed url={'https://www.google.com/maps/@46.5084367,6.5426424,15z'} />)
  .add('Search link', () => (
    <Embed
      url={
        'https://www.google.com/maps/place/London,+UK/@51.5140318,-0.3089719,11z/data=!4m5!3m4!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5073509!4d-0.1277583'
      }
    />
  ))
  .add('Fitted', () => {
    return (
      <Box>
        <Embed url={'https://www.google.com/maps/@46.5084367,6.5426424,15z'} />
      </Box>
    );
  });
