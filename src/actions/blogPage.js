import {Storyblok, StoryblokVersion} from '../tools/Storyblok';

export const FETCH_BLOG_PAGE = 'FETCH_BLOG_PAGE';

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
