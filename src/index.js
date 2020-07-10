import React from 'react';
import ReactDOM from 'react-dom';

import "./index.css"
import App from "./App";
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import registerServiceWorker from "./registerServiceWorker";
import store from "./store";
import Provider from "react-redux/es/components/Provider";
import 'typeface-roboto'

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>, document.getElementById('root'));

registerServiceWorker();