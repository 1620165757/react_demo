import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {reduxStore} from "./main/redux/store/reduxStore";
import Provider from "react-redux/es/components/Provider";

ReactDOM.render((

    <BrowserRouter>
        <Provider store={reduxStore}>
            <App/>
        </Provider>
    </BrowserRouter>
), document.getElementById('root'));
serviceWorker.unregister();
