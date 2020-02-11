import StoryblokClient from 'storyblok-js-client';

export const Storyblok = new StoryblokClient({
    accessToken: 'eFQZM8It621f6NjJixGG9wtt',
    cache: {
        clear: 'auto',
        type: 'memory'
    }
});

export const StoryblokSpaceId = 74068;
export const StoryblokVersion = 'draft';
