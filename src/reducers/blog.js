import {
    FETCH_ITEMS,
    FETCH_SINGLE_ITEM,
    SET_FILTER,
    SET_PAGE_NUMBER,
    SET_FILTER_ITEMS_PER_PAGE,
    FETCH_PAGE_DATA,
    FETCH_FILTERED_ITEMS_SUCCEEDED,
    FETCH_FILTERED_ITEMS_FAILED,
    FETCH_FILTERED_ITEMS_REQUESTED
} from '../actiontypes/blog';

const ITEMS_PER_PAGE_FOR_SNAP = 1000;

const defaultState = {
    items: [],
    lastRequestState: {},
    isRequestOngoing: false,
    filteredItems: [],
    filter: {
        filter: {text: ''},
        pageNumber: 1,
        itemsPerPage: navigator.userAgent !== 'ReactSnap' ? 9 : ITEMS_PER_PAGE_FOR_SNAP,
    },
    pageData: [],
};

const reducer = (state = defaultState, action) => {

    const newState = {...state};

    switch (action.type) {
        case FETCH_ITEMS:
            if (action.payload) {
                newState.items = action.payload;
            }
            return newState;

        case FETCH_FILTERED_ITEMS_SUCCEEDED:
            if (action.payload) {
                newState.filteredItems = action.payload;
                newState.lastRequestState = { success: true, message: '' };
                newState.isRequestOngoing = false;
            }
            return newState;

        case FETCH_FILTERED_ITEMS_FAILED:
            newState.lastRequestState = { success: false, message: action.payload };
            newState.isRequestOngoing = false;
            return newState;

        case FETCH_FILTERED_ITEMS_REQUESTED:
            newState.isRequestOngoing = true;
            return newState;


        case FETCH_SINGLE_ITEM:
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

        case SET_PAGE_NUMBER:
            newState.filter.pageNumber = action.payload;
            return newState;

        case SET_FILTER:
            newState.filter.filter = action.payload;
            return newState;

        case SET_FILTER_ITEMS_PER_PAGE:
            newState.filter.itemsPerPage = navigator.userAgent !== 'ReactSnap' ? action.payload : ITEMS_PER_PAGE_FOR_SNAP;
            return newState;

        case FETCH_PAGE_DATA:
            if (action.payload && action.payload.length > 0) {
                newState.pageData = action.payload;
            }
            return newState;

        default:
            return newState;
    }
};

export default reducer;
