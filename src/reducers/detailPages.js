import {FETCH_SINGLE_ITEM, FETCH_ITEMS} from '../actiontypes/detailPages';

const defaultState = {};

const reducer = (state = defaultState, action) => {

    const newState = {...state};

    switch (action.type) {
        case FETCH_SINGLE_ITEM:
            try {
                const parts = action.payload.data.story.full_slug.split('/');
                if (!newState[parts[0]]) {
                    newState[parts[0]] = {};
                }
                newState[parts[0]][parts[1]] = action.payload.data.story;
            } catch (e) {
                console.warn('reducer error', e);
            }
            return newState;

        case FETCH_ITEMS:
            try {
                if (typeof action.payload !== 'undefined' && action.payload.constructor === Array) {
                    action.payload.map(item => {
                        const parts = item.full_slug.split('/');
                        if (!newState[parts[0]]) {
                            newState[parts[0]] = {};
                        }
                        newState[parts[0]][parts[1]] = item;
                    });
                }
            } catch (e) {
            }
            return newState;

        default:
            return state;
    }
};

export default reducer;
