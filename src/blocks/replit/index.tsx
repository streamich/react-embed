import * as React from 'react';
import {BlockProps} from '../..';

const Replit: React.SFC<BlockProps> = ({id, renderWrap}) => {
  return renderWrap(
    <iframe
      height="700px"
      width="100%"
      frameBorder="no"
      allowFullScreen
      src={`https://repl.it/${id}?lite=true`}
      scrolling="no"
      sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
    />,
  );
};

export default Replit;
