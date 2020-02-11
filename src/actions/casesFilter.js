export const SET_CASES_PAGE = 'SET_CASES_PAGE';
export const SET_CASES_FILTER = 'SET_CASES_FILTER';
export const SET_CASES_FILTER_ITEMS_PER_PAGE = 'SET_CASES_FILTER_ITEMS_PER_PAGE';

export const setCasesFilter = (filter) => ({
    type: SET_CASES_FILTER,
    payload: filter,
});

export const setCasesFilterItemsPerPage = (items_per_page) => ({
    type: SET_CASES_FILTER_ITEMS_PER_PAGE,
    payload: items_per_page,
});

export const setCasesPage = (page) => ({
    type: SET_CASES_PAGE,
    payload: page,
});


