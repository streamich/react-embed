import * as React from 'react';
import {ReactEmbedProps} from './ReactEmbed';

const Resource = React.lazy(() => import('./ReactEmbed') as any);

const Embed: React.SFC<ReactEmbedProps> = props => (
  <React.Suspense fallback={null}>
    <Resource {...props} />
  </React.Suspense>
);

export default Embed;
