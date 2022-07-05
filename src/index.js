import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.js'
import store from "./Redux/store.js"
import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
