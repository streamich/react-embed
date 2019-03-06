import * as React from 'react';
import {ReactEmbedRenderer} from '.';

const renderer: ReactEmbedRenderer = (Block: any, id, props, state) => {
  const renderVoid = error => props.renderVoid!(props, state, error);

  return (
    <React.Suspense fallback={props.renderLoading!}>
      <Block {...state.url} id={id} renderVoid={renderVoid} />
    </React.Suspense>
  );
};

export default renderer;
