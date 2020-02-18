import { call, put, takeLatest } from 'redux-saga/effects'

import {Storyblok, StoryblokVersion} from '../tools/Storyblok';
import {entitySlug} from '../entities/blog';

import {
    FETCH_FILTERED_ITEMS_REQUESTED,
    FETCH_FILTERED_ITEMS_SUCCEEDED,
    FETCH_FILTERED_ITEMS_FAILED,
} from '../actiontypes/blog';

export const fetchFilteredItemsPromise = (search_term) => {
    return Storyblok
        .getAll('cdn/stories', {
            starts_with: entitySlug,
            is_startpage: false,
            search_term: search_term,
            version: StoryblokVersion,
        });
};

function* fetchFilteredItemsSaga(action) {
    try {
        const items = yield call(fetchFilteredItemsPromise, action.payload.search_term);
        yield put({type: FETCH_FILTERED_ITEMS_SUCCEEDED, payload: items});
    } catch (e) {
        yield put({type: FETCH_FILTERED_ITEMS_FAILED, message: e.message});
    }
}

function* filteredItemsSaga() {
    yield takeLatest(FETCH_FILTERED_ITEMS_REQUESTED, fetchFilteredItemsSaga);
}

export default filteredItemsSaga;
