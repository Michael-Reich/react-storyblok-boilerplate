import {entityName} from '../entities/cases';

export const FETCH_ITEMS = `${entityName}/FETCH_ITEMS`;
export const FETCH_SINGLE_ITEM = `${entityName}/FETCH_SINGLE_ITEM`;
export const SET_PAGE_NUMBER = `${entityName}/SET_PAGE_NUMBER`;
export const SET_FILTER = `${entityName}/SET_FILTER`;
export const SET_FILTER_ITEMS_PER_PAGE = `${entityName}/SET_FILTER_ITEMS_PER_PAGE`;

export const FETCH_FILTERED_ITEMS_REQUESTED = `${entityName}/FETCH_FILTERED_ITEMS_REQUESTED`;
export const FETCH_FILTERED_ITEMS_SUCCEEDED = `${entityName}/FETCH_FILTERED_ITEMS_SUCCEEDED`;
export const FETCH_FILTERED_ITEMS_FAILED = `${entityName}/FETCH_FILTERED_ITEMS_FAILED`;

export const FETCH_PAGE_DATA = `${entityName}/FETCH_PAGE_DATA`;
