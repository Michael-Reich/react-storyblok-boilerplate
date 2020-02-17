import { call, put, takeLatest } from 'redux-saga/effects'

import {fetchBlogFilteredItems} from '../actions/blog';
import {
    FETCH_BLOG_FILTERED_ITEMS_REQUESTED,
    FETCH_BLOG_FILTERED_ITEMS_SUCCEEDED,
    FETCH_BLOG_FILTERED_ITEMS_FAILED,
} from '../actiontypes/blog';


function* fetchBlogFiltered(action) {
    console.log("action", action);
    try {
        const items = yield call(fetchBlogFilteredItems, action.payload.search_term);
        console.log("items", items);
        yield put({type: FETCH_BLOG_FILTERED_ITEMS_SUCCEEDED, payload: items.payload});
    } catch (e) {
        yield put({type: FETCH_BLOG_FILTERED_ITEMS_FAILED, message: e.message});
    }
}

function* helloSaga() {
    yield takeLatest(FETCH_BLOG_FILTERED_ITEMS_REQUESTED, fetchBlogFiltered);
}

export default helloSaga;