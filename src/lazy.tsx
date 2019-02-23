import * as React from 'react';
import {ReactEmbedProps} from '.';

const Resource = React.lazy(() => import('.'));

const ReactEmbedLazy: React.SFC<ReactEmbedProps> = props => (
  <React.Suspense fallback={null}>
    <Resource {...props} />
  </React.Suspense>
);

export default ReactEmbedLazy;
