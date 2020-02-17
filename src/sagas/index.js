import {spawn} from 'redux-saga/effects';

import blogSaga from './blog';

export default function* rootSaga() {
    yield spawn(blogSaga);
}