import {Storyblok, StoryblokVersion} from '../tools/Storyblok';

export const FETCH_CASES = 'FETCH_CASES';
export const FETCH_SINGLE_CASE = 'FETCH_SINGLE_CASE';

/**
 * CASES
 */


export const fetchCases = () => {
    const request = Storyblok
        .getAll('cdn/stories', {
            starts_with: 'cases',
            is_startpage: false,
            version: StoryblokVersion
        });

    return {
        type: FETCH_CASES,
        payload: request
    };
};

export const fetchSingleCase = (slug) => {
    const request = Storyblok
        .get(`cdn/stories/cases/${slug}`, {
            version: StoryblokVersion
        });
    return {
        type: FETCH_SINGLE_CASE,
        payload: request
    };
};
