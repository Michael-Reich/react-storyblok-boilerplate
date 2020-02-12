import {fonts} from './fonts';
import {breakpoints} from './breakpoints';
import {colors} from './colors';
import {tools} from './tools';

const h1 = {
    fontFamily: fonts.secondary,
    fontWeight: 800,
    letterSpacing: 0,
    margin: 0,
    padding: 0,
    lineHeight: '49px',
    fontSize: 40,
    [`@media (min-width: ${breakpoints.mdMin}px) and (max-width: ${breakpoints.mdMax}px)`]: {
        fontSize: 30,
        lineHeight: '38px',
    },
    [`@media (max-width: ${breakpoints.smMax}px)`]: {
        fontSize: 23,
        lineHeight: '28px',
    },
};

const h2 = {
    fontFamily: fonts.secondary,
    fontWeight: 800,
    letterSpacing: 0,
    margin: 0,
    padding: 0,
    lineHeight: '42px',
    fontSize: 34,
    [`@media (min-width: ${breakpoints.mdMin}px) and (max-width: ${breakpoints.mdMax}px)`]: {
        fontSize: 26,
        lineHeight: '32px',
    },
    [`@media (max-width: ${breakpoints.smMax}px)`]: {
        fontSize: 20,
        lineHeight: '24px',
    },
};

const h3 = {
    color: 'inherit',
    fontWeight: 800,
    fontFamily: fonts.secondary,
    fontSize: 18,
    letterSpacing: 0,
    margin: 0,
    padding: 0,
    lineHeight: '20px',
    [`@media (min-width: ${breakpoints.mdMin}px) and (max-width: ${breakpoints.mdMax}px)`]: {
        fontSize: 17,
        lineHeight: '19px',
    },
    [`@media (max-width: ${breakpoints.smMax}px)`]: {
        fontSize: 16,
        lineHeight: '18px',
    },
};

const h5 = {
    color: 'inherit',
    fontWeight: 800,
    fontFamily: fonts.secondary,
    fontSize: 22,
    letterSpacing: 0,
    margin: 0,
    padding: 0,
    lineHeight: 1.5,
    '&>a': {
        color: colors.dark,
        transition: tools.transition,
        '&:hover': {
            color: colors.vibrate,
            textDecoration: 'none',
        },
    },
};

const h4 = {
    color: 'inherit',
    fontWeight: 800,
    fontFamily: fonts.secondary,
    fontSize: 32,
    letterSpacing: 0,
    margin: 0,
    padding: 0,
    lineHeight: '34px',
    '&>a': {
        color: colors.dark,
        transition: tools.transition,
        '&:hover': {
            color: colors.vibrate,
            textDecoration: 'none',
        },
    },
};

const caption = {
    color: 'inherit',
    letterSpacing: 0,
    fontSize: 18,
    fontFamily: fonts.secondary,
    margin: 0,
    marginBottom: 10,
    padding: 0,
    lineHeight: '22px',
    textTransform: 'uppercase',
    '&>a': {
        color: colors.dark,
        transition: tools.transition,
        '&:hover': {
            color: colors.vibrate,
            textDecoration: 'none',
        },
    },
    [`@media (min-width: ${breakpoints.mdMin}px) and (max-width: ${breakpoints.mdMax}px)`]: {
        fontSize: 14,
        lineHeight: '18px',
    },
    [`@media (max-width: ${breakpoints.smMax}px)`]: {
        fontSize: 12,
        lineHeight: '15px',
    },
};

const unboxed = {
    color: 'inherit',
    fontFamily: fonts.primary,
    letterSpacing: 0,
    fontWeight: 'lighter',
    fontSize: 26,
    lineHeight: '38px',
    [`@media (min-width: ${breakpoints.mdMin}px) and (max-width: ${breakpoints.mdMax}px)`]: {
        fontSize: 22,
        lineHeight: '30px',
    },
    [`@media (max-width: ${breakpoints.smMax}px)`]: {
        fontSize: 18,
        lineHeight: '26px',
    },
};

const p = {
    fontFamily: fonts.primary,
    letterSpacing: 0,
    color: 'inherit',
    transition: tools.transition,
    fontWeight: 'lighter',
    '&>a': {
        transition: tools.transition,
        color: colors.vibrate,
        '&:hover': {
            color: colors.vibrate,
            textDecoration: 'none',
        },
    },
    fontSize: 20,
    lineHeight: '28px',
    [`@media (min-width: ${breakpoints.mdMin}px) and (max-width: ${breakpoints.mdMax}px)`]: {
        fontSize: 18,
        lineHeight: '26px',
    },
    [`@media (max-width: ${breakpoints.smMax}px)`]: {
        fontSize: 16,
        lineHeight: '26px',
    },
};

export const mixins = {
    h1,
    h2,
    h3,
    h4,
    h5,
    caption,
    unboxed,
    p,
};
