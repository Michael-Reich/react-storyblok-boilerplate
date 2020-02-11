import {Storyblok, StoryblokVersion} from '../tools/Storyblok';

export const FETCH_CASES_PAGE = 'FETCH_CASES_PAGE';

export const fetchCasesPage = () => {
    const request = Storyblok
        .getAll('cdn/stories', {
            starts_with: 'cases',
            is_startpage: true,
            version: StoryblokVersion
        });

    return {
        type: FETCH_CASES_PAGE,
        payload: request
    };
};
