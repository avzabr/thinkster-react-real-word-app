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
        case 'REGISTER':
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
        case 'APP_LOAD':
            return {
                ...state,
                appLoaded: true,
                token: action.token ? action.token : null,
                user: action.payload ? action.payload.user : null
            };
        case 'SETTINGS_SAVED':
            return {
                ...state,
                redirectTo: action.error ? null : '/',
                user: action.error ? null : action.payload.user
            };
        case 'LOGOUT':
            return {
                ...state,
                redirectTo: '/',
                token: null,
                currentUser: null
            };
        default:
            return state;
    }
}