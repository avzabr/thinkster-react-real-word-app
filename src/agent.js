/**
 * Created by Aliaksandr on 20.05.2017.
 */

import superagentPromise from "superagent-promise";
import _superagent from "superagent";

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'https://conduit.productionready.io/api';

const responseBody = res => res.body;

const requests = {
    get: url =>
        superagent.get(`${API_ROOT}${url}`).then(responseBody)
};

const Articles = {
    all: page =>
        requests.get(`/articles?limit=10`)
};

export {
    Articles
};
