import * as React from 'react';
import {BlockProps} from '../..';
import {rule} from 'p4-css';

const blockClass = rule({
  d: 'block',
  ov: 'hidden',
  w: '100%',
  bd: '1px solid #E5E9F2',
  bdrad: '6px',
  '& iframe': {
    d: 'block',
    ov: 'hidden',
    bd: 0,
    w: '100%',
    h: '450px',
    bdrad: '8px',
  },
});

const Figma: React.SFC<BlockProps> = ({url, renderWrap}) => {
  return renderWrap(
    <div className={blockClass}>
      <iframe src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`} allowFullScreen />
    </div>,
  );
};

export default Figma;
