import * as React from 'react';
import {storiesOf} from '@storybook/react';
import ReactEmbed from '..';

storiesOf('Demo', module)
  .add('Fallback', () => {
    return (
      <ReactEmbed
        fallback={'This is fallback'}
        url={'https://gist.github.com/derrickturk/156b06d3a8496cc15fcab587e7881073'}
      />
    );
  })
  .add('Invalid URL', () => {
    return (
      <ReactEmbed url={'asdf'} renderVoid={(props, state, error) => <div>Error: {error ? error.message : ''}</div>} />
    );
  })
  .add('Unknown block', () => {
    return (
      <ReactEmbed
        url={'http://localhost:6010'}
        renderVoid={(props, state, error) => <div>Error: {error ? error.message : ''}</div>}
      />
    );
  })
  .add('Display router error', () => {
    return (
      <ReactEmbed
        url={'http://localhost:6010'}
        router={() => {
          throw new Error('foo');
        }}
        renderVoid={(props, state, error) => <div>Error: {error ? error.message : ''}</div>}
      />
    );
  })
  .add('wrapper', () => {
    return (
      <ReactEmbed
        fallback={'This is fallback'}
        url={'https://gist.github.com/derrickturk/156b06d3a8496cc15fcab587e7881073'}
        renderWrap={(children) => (
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
        )}
      />
    );
  });
