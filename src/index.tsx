import * as React from 'react';
import {ReactEmbedProps} from './ReactEmbed';

export * from './ReactEmbed';

const Resource = React.lazy(() => import('./ReactEmbed') as any);

const Embed: React.SFC<ReactEmbedProps> = (props) => {
  return (
    <React.Suspense fallback={props.fallback || null}>
      <Resource {...props} />
    </React.Suspense>
  );
};

export default Embed;
