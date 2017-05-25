import React from "react";
import {Provider} from "react-redux";
import ReactDOM from "react-dom";
import {
    BrowserRouter,
    Route
} from 'react-router-dom';

import App from "./component/App";
import store from './store'

import registerServiceWorker from "./registerServiceWorker";
import "./index.css";


ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        <Route path="/" component={App}/>
    </BrowserRouter>

</Provider>, document.getElementById('root'));
registerServiceWorker();
