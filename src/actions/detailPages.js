import {Storyblok, StoryblokVersion} from '../tools/Storyblok';

export const FETCH_SINGLE_DETAIL_PAGE = 'FETCH_SINGLE_DETAIL_PAGE';
export const FETCH_DETAIL_PAGES = 'FETCH_DETAIL_PAGES';

export const fetchDetailPages = (slug) => {
    const request = Storyblok
        .getAll(`cdn/stories`, {
            starts_with: slug,
            version: StoryblokVersion,
            resolve_links: 'url',
        });
    return {
        type: FETCH_DETAIL_PAGES,
        payload: request,
    };
};

export const fetchSingleDetailPage = (parentSlug, slug) => {
    const request = Storyblok
        .get(`cdn/stories/${parentSlug}/${slug}`, {
            version: StoryblokVersion,
            resolve_links: 'url',
        });
    return {
        type: FETCH_SINGLE_DETAIL_PAGE,
        payload: request,
    };
};



