import * as React from 'react';
import {BlockProps} from '../..';
import {rule} from 'p4-css';

const blockClass = rule({
  w: '100%',
  '&>div': {
    pos: 'relative',
    padb: '56.25%',
    h: 0,
  },
  '& iframe': {
    pos: 'absolute',
    top: 0,
    left: 0,
    w: '100%',
    h: '100%',
  },
});

const JsFiddle: React.SFC<BlockProps> = ({id, renderWrap}) => {
  return renderWrap(
    <div className={blockClass}>
      <div>
        <iframe src={`https://jsfiddle.net/${id}/embedded/`} frameBorder="0" allowFullScreen />
      </div>
    </div>,
  );
};

export default JsFiddle;
