import {fonts} from './fonts';
import {tools} from './tools';
import {breakpoints} from './breakpoints';
import {colors} from './colors';
import {mixins} from './mixins';

const buttonDefaults = {
    ...mixins.h3,
    fontFamily: fonts.secondary,
    fontWeight: 'Bold',
    letterSpacing: 0,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 30,
    paddingRight: 30,
    transition: tools.transition,
    borderRadius: tools.borderRadius,
    boxShadow: 'none',
    border: `1px solid ${colors.vibrate}`,
    [`@media (max-width: ${breakpoints.mdMax}px)`]: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
    },
};

const secondary = {
    ...buttonDefaults,
    color: colors.light,
    backgroundColor: colors.vibrate,
    transition: tools.transition,
    '&:hover': {
        color: colors.dark,
        backgroundColor: colors.light,
    },
};

const primary = {
    ...buttonDefaults,
    color: colors.vibrate,
    backgroundColor: colors.light,
    transition: tools.transition,
    '&:hover': {
        color: colors.light,
        backgroundColor: colors.vibrate,
    },
};

const text = {
    ...buttonDefaults,
    border: 'none',
    boxShadow: 'none',
    color: colors.dark,
    backgroundColor: 'transparent',
    transition: tools.transition,
    paddingLeft: 15,
    paddingRight: 15,
    '&:hover': {
        color: colors.light,
        backgroundColor: colors.vibrate,
    },
};

const textActive = {
    ...buttonDefaults,
    border: 'none',
    boxShadow: 'none',
    color: colors.vibrate,
    backgroundColor: 'transparent',
    transition: tools.transition,
    paddingLeft: 15,
    paddingRight: 15,
    '&:hover': {
        color: colors.light,
        backgroundColor: colors.vibrate,
    },
};

export const buttons = {
    secondary,
    primary,
    text,
    textActive,
};
