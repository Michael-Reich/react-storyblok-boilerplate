import {FETCH_SINGLE_ITEM} from '../actiontypes/pages';

const defaultState = [];

const reducer = (state = defaultState, action) => {

    switch (action.type) {
        case FETCH_SINGLE_ITEM:
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

export default reducer;
