import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './context/context'
import { SpeechProvider } from '@speechly/react-client';

import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId='40087ee6-ce80-4917-990c-3a85a54bc2e0' language='en-US'>
    <Provider>
        <App />
    </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);