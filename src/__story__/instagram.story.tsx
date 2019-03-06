import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Embed from '..';

storiesOf('instagram', module)
  .add('Site post link', () => <Embed url={'https://www.instagram.com/p/BuXbvZlB9sr/'} />)
