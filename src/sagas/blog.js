import {Storyblok, StoryblokVersion} from '../tools/Storyblok';

import { call, put, takeLatest } from 'redux-saga/effects'

import {
    FETCH_FILTERED_ITEMS_REQUESTED,
    FETCH_FILTERED_ITEMS_SUCCEEDED,
    FETCH_FILTERED_ITEMS_FAILED,
} from '../actiontypes/blog';

export const fetchBlogFilteredPromise = (search_term) => {
    return Storyblok
        .getAll('cdn/stories', {
            starts_with: 'blog',
            is_startpage: false,
            search_term: search_term,
            version: StoryblokVersion,
        });
};

function* fetchBlogFiltered(action) {
    try {
        const items = yield call(fetchBlogFilteredPromise, action.payload.search_term);
        yield put({type: FETCH_FILTERED_ITEMS_SUCCEEDED, payload: items});
    } catch (e) {
        yield put({type: FETCH_FILTERED_ITEMS_FAILED, message: e.message});
    }
}

function* blogSaga() {
    yield takeLatest(FETCH_FILTERED_ITEMS_REQUESTED, fetchBlogFiltered);
}

export default blogSaga;
