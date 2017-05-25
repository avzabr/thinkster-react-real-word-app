/**
 * Created by Aliaksandr on 25.05.2017.
 */

export default (state = {}, action) => {
    switch (action.type) {
        case 'HOME_PAGE_LOADED':
            return {
                ...state,
                articles: action.payload.articles
            };
        default:
            return state;
    }
};