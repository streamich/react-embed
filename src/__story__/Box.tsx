import * as React from 'react';

export const Box = ({children}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid red'
      }}
    >{children}</div>
  );
};
