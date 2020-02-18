import {Storyblok, StoryblokVersion} from '../tools/Storyblok';
import {FETCH_ITEMS, FETCH_SINGLE_ITEM} from '../actiontypes/detailPages';

export const fetchItems = (slug) => {
    const request = Storyblok
        .getAll(`cdn/stories`, {
            starts_with: slug,
            version: StoryblokVersion,
            resolve_links: 'url',
        });
    return {
        type: FETCH_ITEMS,
        payload: request,
    };
};

export const fetchSingleItem = (parentSlug, slug) => {
    const request = Storyblok
        .get(`cdn/stories/${parentSlug}/${slug}`, {
            version: StoryblokVersion,
            resolve_links: 'url',
        });
    return {
        type: FETCH_SINGLE_ITEM,
        payload: request,
    };
};



