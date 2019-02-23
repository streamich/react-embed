import * as React from 'react';
import {render} from 'react-dom';
import App from '../../src/components/App';

const renderApp = () => {
    render(<App />, document.getElementById('app'));
};

export default renderApp;
