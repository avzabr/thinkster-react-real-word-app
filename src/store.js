/**
 * Created by Aliaksandr on 21.05.2017.
 */

import {applyMiddleware, combineReducers, createStore} from "redux";
import {localStorageMiddleware, promiseMiddleware} from "./middleware";
import auth from "./reducers/auth";
import common from "./reducers/common";
import home from "./reducers/home";
import settings from "./reducers/settings";


const reducer = combineReducers({
    auth,
    common,
    home,
    settings
});

const middleware = applyMiddleware(promiseMiddleware, localStorageMiddleware);
const store = createStore(reducer, middleware);

export default store;
