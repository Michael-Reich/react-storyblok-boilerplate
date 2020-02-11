import {FETCH_BLOG_PAGE} from '../actions/blogPage';

const defaultState = [];

const blogPage = (state = defaultState, action) => {

    switch (action.type) {
        case FETCH_BLOG_PAGE:
            if (action.payload && action.payload.length > 0) {
                return action.payload;
            }
            return state;

        default:
            return state;
    }
};

export default blogPage;
