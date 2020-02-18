import {Storyblok, StoryblokVersion} from '../tools/Storyblok';
import {entitySlug} from '../entities/pages';
import {FETCH_SINGLE_ITEM} from '../actiontypes/pages';

export const fetchSingleItem = (slug) => {
    const request = Storyblok
        .get(`cdn/stories/${entitySlug}/${slug}`, {
            version: StoryblokVersion,
            resolve_links: 'url',
        });
    return {
        type: FETCH_SINGLE_ITEM,
        payload: request
    };
};




