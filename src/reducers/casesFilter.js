import {SET_CASES_FILTER, SET_CASES_PAGE, SET_CASES_FILTER_ITEMS_PER_PAGE} from '../actions/casesFilter';

const ITEMS_PER_PAGE_FOR_SNAP = 1000;

const defaultState = {
    filter: {text: ''},
    page: 1,
    items_per_page: navigator.userAgent !== 'ReactSnap' ? 9 : ITEMS_PER_PAGE_FOR_SNAP,
};

const casesFilter = (state = defaultState, action) => {
    const newState = {...state};

    switch (action.type) {
        case SET_CASES_FILTER:
            newState.filter = action.payload;
            return newState;

        case SET_CASES_PAGE:
            newState.page = action.payload;
            return newState;

        case SET_CASES_FILTER_ITEMS_PER_PAGE:
            newState.items_per_page = navigator.userAgent !== 'ReactSnap' ? action.payload : ITEMS_PER_PAGE_FOR_SNAP;
            return newState;

        default:
            return state;
    }
};

export default casesFilter;
