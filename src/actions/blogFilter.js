export const SET_BLOG_PAGE = 'SET_BLOG_PAGE';
export const SET_BLOG_FILTER = 'SET_BLOG_FILTER';
export const SET_BLOG_FILTER_ITEMS_PER_PAGE = 'SET_BLOG_FILTER_ITEMS_PER_PAGE';

export const setBlogFilter = (filter) => ({
    type: SET_BLOG_FILTER,
    payload: filter,
});

export const setBlogFilterItemsPerPage = (items_per_page) => ({
    type: SET_BLOG_FILTER_ITEMS_PER_PAGE,
    payload: items_per_page,
});

export const setBlogPage = (page) => ({
    type: SET_BLOG_PAGE,
    payload: page,
});

