import {spawn} from 'redux-saga/effects';

import blogSaga from './blog';
import casesSaga from './cases';

export default function* rootSaga() {
    yield spawn(blogSaga);
    yield spawn(casesSaga);
}
