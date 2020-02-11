import {FETCH_BLOG, FETCH_SINGLE_BLOG} from '../actions/blog';

const defaultState = [];

const blog = (state = defaultState, action) => {

    switch (action.type) {
        case FETCH_BLOG:
            if (action.payload) {
                return action.payload;
            }
            return state;

        case FETCH_SINGLE_BLOG:
            if (action.payload && action.payload.data && action.payload.data.story) {
                const newState = [];
                [...state].map(item => {
                    if (item.slug !== action.payload.data.story.slug) {
                        newState.push(item);
                    }
                });
                newState.push(action.payload.data.story);
                return newState;
            }
            return state;

        default:
            return state;
    }
};

export default blog;
