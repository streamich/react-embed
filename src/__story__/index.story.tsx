import * as React from 'react';
import {storiesOf} from '@storybook/react';
import ReactEmbed from '..';

storiesOf('Demo', module)
  .add('Invalid URL', () => {
    return (
      <ReactEmbed url={'asdf'} renderVoid={(props, state, error) => (
        <div>
          Error: {error ? error.message : ''}
        </div>
      )} />
    );
  })
  .add('Unknown block', () => {
    return (
      <ReactEmbed url={'http://localhost:6010'} renderVoid={(props, state, error) => (
        <div>
          Error: {error ? error.message : ''}
        </div>
      )} />
    );
  })
  .add('Display router error', () => {
    return (
      <ReactEmbed url={'http://localhost:6010'} router={() => {throw new Error('foo')}} renderVoid={(props, state, error) => (
        <div>
          Error: {error ? error.message : ''}
        </div>
      )} />
    );
  })
