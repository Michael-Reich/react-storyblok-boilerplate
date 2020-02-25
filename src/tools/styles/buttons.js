import {fonts} from './fonts';
import {tools} from './tools';
import {breakpoints} from './breakpoints';
import {colors} from './colors';
import {mixins} from './mixins';

const buttonDefaults = {
    ...mixins.h3,
    fontFamily: fonts.headline,
    fontWeight: 'Bold',
    letterSpacing: 0,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: tools.padding,
    paddingRight: tools.padding,
    transition: tools.transition,
    borderRadius: tools.borderRadius,
    boxShadow: 'none',
    border: `2px solid ${colors.highlight}`,
    [`@media (max-width: ${breakpoints.mdMax}px)`]: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
    },
};


const secondary = {
    ...buttonDefaults,
    color: colors.highlight,
    backgroundColor: colors.light,
    transition: tools.transition,
    '&:hover': {
        color: colors.light,
        backgroundColor: colors.highlight,
    },
};

const primary = {
    ...buttonDefaults,
    color: colors.light,
    backgroundColor: colors.highlight,
    transition: tools.transition,
    '&:hover': {
        color: colors.highlight,
        backgroundColor: colors.light,
    },
};

const text = {
    ...buttonDefaults,
    border: 'none',
    boxShadow: 'none',
    color: colors.dark,
    backgroundColor: 'transparent',
    transition: tools.transition,
    paddingLeft: 0,
    paddingRight: 0,
    '&:hover': {
        color: colors.light,
        backgroundColor: colors.highlight,
    },
    [`@media (max-width: ${breakpoints.mdMax}px)`]: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        paddingRight: 0,
    },
};

const textActive = {
    ...buttonDefaults,
    border: 'none',
    boxShadow: 'none',
    color: colors.highlight,
    backgroundColor: 'transparent',
    transition: tools.transition,
    paddingLeft: 0,
    paddingRight: 0,
    '&:hover': {
        color: colors.light,
        backgroundColor: colors.highlight,
    },
    [`@media (max-width: ${breakpoints.mdMax}px)`]: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        paddingRight: 0,
    },
};

export const buttons = {
    secondary,
    primary,
    text,
    textActive,
};
