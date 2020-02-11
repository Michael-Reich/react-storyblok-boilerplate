import {Storyblok, StoryblokVersion} from '../tools/Storyblok';

export const FETCH_SINGLE_PAGE = 'FETCH_SINGLE_PAGE';

export const fetchSinglePage = (slug) => {
    const request = Storyblok
        .get(`cdn/stories/pages/${slug}`, {
            version: StoryblokVersion,
            resolve_links: 'url',
        });
    return {
        type: FETCH_SINGLE_PAGE,
        payload: request
    };
};




