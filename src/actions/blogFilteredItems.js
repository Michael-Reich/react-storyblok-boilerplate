import {Storyblok, StoryblokVersion} from '../tools/Storyblok';

export const FETCH_BLOG_FILTERED_ITEMS = 'FETCH_BLOG_FILTERED_ITEMS';

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
