import * as React from 'react';
import {ReactEmbedProps} from './ReactEmbed';

export * from './ReactEmbed';
export {fetchOEmbed, getOEmbedEndpoint, createOEmbedBlock} from './blocks/oembed';
export type {OEmbedResponse, OEmbedBlockOptions} from './blocks/oembed';

const Resource = React.lazy(() => import('./ReactEmbed') as any);

const Embed: React.FC<ReactEmbedProps> = (props) => {
  return (
    <React.Suspense fallback={props.fallback || null}>
      <Resource {...props} />
    </React.Suspense>
  );
};

export default Embed;
