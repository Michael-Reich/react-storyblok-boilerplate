import {SET_BLOG_FILTER, SET_BLOG_PAGE, SET_BLOG_FILTER_ITEMS_PER_PAGE} from '../actions/blogFilter';

const ITEMS_PER_PAGE_FOR_SNAP = 1000;

const defaultState = {
    filter: {text: ''},
    page: 1,
    items_per_page: navigator.userAgent !== 'ReactSnap' ? 9 : ITEMS_PER_PAGE_FOR_SNAP,
};

const blogFilter = (state = defaultState, action) => {
    const newState = {...state};

    switch (action.type) {
        case SET_BLOG_PAGE:
            newState.page = action.payload;
            return newState;

        case SET_BLOG_FILTER:
            newState.filter = action.payload;
            return newState;

        case SET_BLOG_FILTER_ITEMS_PER_PAGE:
            newState.items_per_page = navigator.userAgent !== 'ReactSnap' ? action.payload : ITEMS_PER_PAGE_FOR_SNAP;
            return newState;

        default:
            return state;
    }
};

export default blogFilter;
