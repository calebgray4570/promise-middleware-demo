import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from 'react-redux'
import Store from './ducks/store'


// Nothing in Index.js file is changed. It remains the same regardless of using Promise Middleware or not.

ReactDOM.render(

<Provider store={Store}>
    <App />
</Provider>

, document.getElementById('root'));
