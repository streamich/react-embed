import * as React from 'react';
import {BlockProps} from '../..';
const GistEmbed = require('react-gist');

const Gist: React.SFC<BlockProps> = ({id}) => <GistEmbed id={id} />;

export default Gist;
