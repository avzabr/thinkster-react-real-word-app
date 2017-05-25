/**
 * Created by Aliaksandr on 21.05.2017.
 */

import {applyMiddleware, combineReducers, createStore} from "redux";
import {promiseMiddleware} from "./middleware";
import auth from "./reducers/auth";
import common from "./reducers/common";
import home from "./reducers/home";


const reducer = combineReducers({
    auth,
    common,
    home
});

const middleware = applyMiddleware(promiseMiddleware);
const store = createStore(reducer, middleware);

export default store;
