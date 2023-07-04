import * as React from 'react';
import {BlockProps} from '../..';

export interface CodeSandboxProps extends BlockProps {}

const CodeSandbox: React.FC<CodeSandboxProps> = ({
  url,
  renderWrap,
}) => {

  return renderWrap(
    <iframe
      src={url}
      style={{
        width: '100%',
        height: '500px',
        border: 0,
        borderRadius: '4px',
        overflow: 'hidden',
      }}
      width="100%"
      height="500"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   />
  );
};

export default CodeSandbox;
