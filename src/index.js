import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
import store from "./Redux/store.js";
import { Provider } from 'react-redux';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
