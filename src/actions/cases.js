import {Storyblok, StoryblokVersion} from '../tools/Storyblok';
import {entitySlug} from '../entities/cases';
import {
    FETCH_ITEMS,
    FETCH_SINGLE_ITEM,
    SET_FILTER,
    SET_PAGE_NUMBER,
    SET_FILTER_ITEMS_PER_PAGE,
    FETCH_PAGE_DATA,
    FETCH_FILTERED_ITEMS_REQUESTED,
} from '../actiontypes/cases';

export const fetchItems = () => {
    const request = Storyblok
        .getAll('cdn/stories', {
            starts_with: entitySlug,
            is_startpage: false,
            version: StoryblokVersion,
        });

    return {
        type: FETCH_ITEMS,
        payload: request,
    };
};

export const fetchFilteredItemsRequested = (search_term) => {
    return {
        type: FETCH_FILTERED_ITEMS_REQUESTED,
        payload: {search_term: search_term}
    };
};

export const fetchSingleItem = (slug) => {
    const request = Storyblok
        .get(`cdn/stories/${entitySlug}/${slug}`, {
            version: StoryblokVersion,
        });
    return {
        type: FETCH_SINGLE_ITEM,
        payload: request,
    };
};

export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: filter,
});

export const setFilterItemsPerPage = (itemsPerPage) => ({
    type: SET_FILTER_ITEMS_PER_PAGE,
    payload: itemsPerPage,
});

export const setPageNumber = (page) => ({
    type: SET_PAGE_NUMBER,
    payload: page,
});

export const fetchPageData = () => {
    const request = Storyblok
        .getAll('cdn/stories', {
            starts_with: entitySlug,
            is_startpage: true,
            version: StoryblokVersion
        });

    return {
        type: FETCH_PAGE_DATA,
        payload: request,
    };
};
