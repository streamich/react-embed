import * as React from 'react';
import {BlockProps} from '../..';

const Pdf: React.FC<BlockProps> = ({url, renderWrap}) => {
  return renderWrap(
    <embed src={url} type="application/pdf" style={{width: '100%', minHeight: 600}} className="react-embed--pdf" />
  );
};

export default Pdf;
