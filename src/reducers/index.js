import {combineReducers} from 'redux';

import blog from './blog';
import cases from './cases';
import pages from './pages';
import detailPages from './detailPages';

export default combineReducers({
    blog,
    cases,
    pages,
    detailPages,
});
