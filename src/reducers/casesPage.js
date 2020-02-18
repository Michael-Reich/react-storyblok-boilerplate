import {FETCH_CASES_PAGE} from '../actions/casesPage';

const defaultState = [];

const reducer = (state = defaultState, action) => {

    switch (action.type) {
        case FETCH_CASES_PAGE:
            if (action.payload && action.payload.length > 0) {
                return action.payload;
            }
            return state;

        default:
            return state;
    }
};

export default reducer;
