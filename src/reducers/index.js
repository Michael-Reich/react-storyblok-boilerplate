import {combineReducers} from 'redux';
import blog from './blog';
import blogPage from './blogPage';
import blogFilter from './blogFilter';
import cases from './cases';
import casesPage from './casesPage';
import casesFilter from './casesFilter';
import pages from './pages';
import detailPages from './detailPages';

export default combineReducers({
    blog,
    blogPage,
    blogFilter,
    cases,
    casesPage,
    casesFilter,
    pages,
    detailPages,
});
