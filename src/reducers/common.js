/**
 * Created by Aliaksandr on 25.05.2017.
 */

const defaultState = {
    appName: 'Conduit',
    token: null,
    redirectTo: null
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                token: action.error ? null : action.payload.user.token,
                redirectTo: action.error ? null : '/',
                currentUser: action.error ? null : action.payload.user
            };
        case 'REDIRECT':
            return {
                ...state,
                redirectTo: null
            };
        default:
            return state;
    }
}