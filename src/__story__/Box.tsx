import * as React from 'react';

const blockStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid red',
};

export const Box = ({children}) => {
  return <div style={blockStyle}>{children}</div>;
};
