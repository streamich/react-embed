import * as React from 'react';
import {BlockProps} from '../..';
import {rule} from 'p4-css';

const blockClass = rule({
  d: 'inline-block',
  ov: 'hidden',
  bdrad: '6px',
  maxW: '600px',
  w: '100%',
  '&>iframe': {
    d: 'block',
    ov: 'hidden',
    bd: 0,
    w: '100%',
    h: '360px',
  },
});

const latlngRegex = /@([\-0-9\.]+),([\-0-9\.]+)(?:[^\-0-9\.]|$)/;

const Gmaps: React.SFC<BlockProps> = ({url, renderWrap, renderVoid}) => {
  const matches = url.match(latlngRegex);
  if (!matches) return renderVoid();

  const [omit, lat, lng] = matches;

  return renderWrap(
    <div className={blockClass}>
      <iframe
        allowFullScreen
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21948.472927059174!2d${encodeURIComponent(
          lng,
        )}!3d${encodeURIComponent(lat)}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sch!4v1551898961513`}
      />
    </div>,
  );
};

export default Gmaps;
