import {FETCH_BLOG_FILTERED_ITEMS} from '../actions/blogFilteredItems';

const defaultState = [];

const blogFilteredItems = (state = defaultState, action) => {

    switch (action.type) {
        case FETCH_BLOG_FILTERED_ITEMS:
            if (action.payload) {
                return action.payload;
            }
            return state;

        default:
            return state;
    }
};

export default blogFilteredItems;
