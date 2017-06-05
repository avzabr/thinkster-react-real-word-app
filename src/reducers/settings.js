/**
 * Created by Aliaksandr on 05.06.2017.
 */


export default (state = {}, action) => {
    switch (action.type) {
        case 'SETTINGS_SAVED':
            return {
                ...state,
                inProgress: false,
                errors: action.error ? action.payload.errors : null
            };
        case 'ASYNC_START':
            return {...state, inProgress: true};
        default:
            return state;
    }
}