import StoryblokClient from 'storyblok-js-client';

export const Storyblok = new StoryblokClient({
    accessToken: 'bRC5MCKEAhAefgZfOcsIuQtt',
    cache: {
        clear: 'auto',
        type: 'memory'
    }
});

export const StoryblokSpaceId = 74068;
export const StoryblokVersion = 'draft';
