import {Storyblok, StoryblokVersion} from '../tools/Storyblok';

export const FETCH_BLOG = 'FETCH_BLOG';
export const FETCH_SINGLE_BLOG = 'FETCH_SINGLE_BLOG';
export const SET_BLOG_PAGE = 'SET_BLOG_PAGE';
export const SET_BLOG_FILTER = 'SET_BLOG_FILTER';
export const SET_BLOG_FILTER_ITEMS_PER_PAGE = 'SET_BLOG_FILTER_ITEMS_PER_PAGE';
export const FETCH_BLOG_FILTERED_ITEMS = 'FETCH_BLOG_FILTERED_ITEMS';
export const FETCH_BLOG_PAGE = 'FETCH_BLOG_PAGE';

export const fetchBlog = () => {
    const request = Storyblok
        .getAll('cdn/stories', {
            starts_with: 'blog',
            is_startpage: false,
            version: StoryblokVersion
        });

    return {
        type: FETCH_BLOG,
        payload: request
    };
};

export const fetchSingleBlog = (slug) => {
    const request = Storyblok
        .get(`cdn/stories/blog/${slug}`, {
            version: StoryblokVersion
        });
    return {
        type: FETCH_SINGLE_BLOG,
        payload: request
    };
};

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


export const fetchBlogFilteredItems = (search_term) => {
    const request = Storyblok
        .getAll('cdn/stories', {
            starts_with: 'blog',
            is_startpage: false,
            search_term: search_term,
            version: StoryblokVersion,
        });

    return {
        type: FETCH_BLOG_FILTERED_ITEMS,
        payload: request
    };
};

export const fetchBlogPage = () => {
    const request = Storyblok
        .getAll('cdn/stories', {
            starts_with: 'blog',
            is_startpage: true,
            version: StoryblokVersion
        });

    return {
        type: FETCH_BLOG_PAGE,
        payload: request,
    };
};
