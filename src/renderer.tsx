import * as React from 'react';
import {ReactEmbedRenderer} from '.';

const renderer: ReactEmbedRenderer = (Block: any, id, props, state) => {
  const renderVoid = (error) => props.renderVoid!(props, state, error);

  return (
    <Block
      {...state.url}
      id={id}
      width={props.width}
      isDark={props.isDark!}
      renderWrap={props.renderWrap!}
      renderVoid={renderVoid}
    />
  );
};

export default renderer;
