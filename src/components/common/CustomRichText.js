import React from 'react';
import {createUseStyles} from 'react-jss';

import {Storyblok} from '../../tools/Storyblok';
import {colors, mixins} from '../../tools/styles';

const createMarkup = (storyblokHTML) => {
    return {
        __html: Storyblok.richTextResolver.render(storyblokHTML),
    };
};

const useStyles = createUseStyles({
    text: {
        '& img': {
            width: '100%',
            height: 'auto',
            display: 'block',
            marginBottom: 10,
            '&[alt="white"]': {
                boxShadow: 'none',
                borderRadius: 0,
            },
        },
        '& h2': {
            ...mixins.h2,
            marginTop: 30,
            marginBottom: 20,
        },
        '& h3': {
            ...mixins.h3,
            marginTop: 30,
            marginBottom: 20,
        },
        '& blockquote': {
            '& p': {
                margin: 0,
                padding: 0,
            },
            padding: 20,
            backgroundColor: colors.muted,
            fontStyle: 'italic',
        },
        '& iframe': {
            width: '100%',
        },
    },
});

export const CustomRichText = (props) => {
    const classes = useStyles();
    return props.data ? <div className={`${classes.text} ${props.className}`} dangerouslySetInnerHTML={createMarkup(props.data)} style={props.style}/> : null;
};

CustomRichText.defaultProps = {
    className: '',
    style: {},
    data: undefined,
};
