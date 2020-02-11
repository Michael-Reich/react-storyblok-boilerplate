import {FETCH_CASES, FETCH_SINGLE_CASE} from '../actions/cases';

const defaultState = [];

const cases = (state = defaultState, action) => {

    switch (action.type) {
        case FETCH_CASES:
            if (action.payload) {
                return action.payload;
            }
            return state;

        case FETCH_SINGLE_CASE:
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

export default cases;
