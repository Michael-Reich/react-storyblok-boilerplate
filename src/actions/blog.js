import {Storyblok, StoryblokVersion} from '../tools/Storyblok';

export const FETCH_BLOG = 'FETCH_BLOG';
export const FETCH_SINGLE_BLOG = 'FETCH_SINGLE_BLOG';

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
