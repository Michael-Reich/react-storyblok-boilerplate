import {
    FETCH_BLOG,
    FETCH_SINGLE_BLOG,
    SET_BLOG_FILTER,
    SET_BLOG_PAGE,
    SET_BLOG_FILTER_ITEMS_PER_PAGE,
    FETCH_BLOG_FILTERED_ITEMS,
    FETCH_BLOG_PAGE
} from '../actiontypes/blog';

const ITEMS_PER_PAGE_FOR_SNAP = 1000;

const defaultState = {
    items: [],
    filteredItems: [],
    filter: {
        filter: {text: ''},
        page: 1,
        items_per_page: navigator.userAgent !== 'ReactSnap' ? 9 : ITEMS_PER_PAGE_FOR_SNAP,
    },
    page: [],
};

const blog = (state = defaultState, action) => {

    const newState = {...state};

    switch (action.type) {
        case FETCH_BLOG:
            if (action.payload) {
                newState.items = action.payload;
            }
            return newState;

        case FETCH_BLOG_FILTERED_ITEMS:
            if (action.payload) {
                newState.filteredItems = action.payload;
            }
            return newState;

        case FETCH_SINGLE_BLOG:
            if (action.payload && action.payload.data && action.payload.data.story) {
                const newStateArray = [];
                [...state.items].map(itm => {
                    if (itm.slug !== action.payload.data.story.slug) {
                        newStateArray.push(itm);
                    }
                });
                newStateArray.push(action.payload.data.story);
                newState.items = newStateArray;
            }
            return newState;

        case SET_BLOG_PAGE:
            newState.filter.page = action.payload;
            return newState;

        case SET_BLOG_FILTER:
            newState.filter.filter = action.payload;
            return newState;

        case SET_BLOG_FILTER_ITEMS_PER_PAGE:
            newState.filter.items_per_page = navigator.userAgent !== 'ReactSnap' ? action.payload : ITEMS_PER_PAGE_FOR_SNAP;
            return newState;

        case FETCH_BLOG_PAGE:
            if (action.payload && action.payload.length > 0) {
                newState.page = action.payload;
            }
            return newState;

        default:
            return newState;
    }
};

export default blog;
