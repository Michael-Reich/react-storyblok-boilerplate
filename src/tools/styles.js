const smMin = 576;
const mdMin = 768;
const lgMin = 992;
const xlMin = 1200;

export const breakpoints = {
    xsMax: smMin - 1,

    smMin: smMin,
    smMax: mdMin - 1,

    mdMin: mdMin,
    mdMax: lgMin - 1,

    lgMin: lgMin,
    lgMax: xlMin - 1,

    xlMin: xlMin,
};

export const colors = {
    dark: '#3C3C3C',
    darkGrey: '#3C3C3C',
    light: '#F8F9FA',
    muted: '#ECE5E2',
    vibrate: '#499091',
    contrast: '#499091',
};

export const fonts = {
    primary: '"Aileron", sans-serif',
    secondary: '"Montserrat", sans-serif',
};

export const fontSizes = {
    unboxed: 26,
    unboxedMd: 22,
    unboxedSm: 18,
    boxed: 20,
    boxedMd: 18,
    boxedSm: 16,
};

export const lineHeights = {
    unboxed: '38px',
    unboxedMd: '30px',
    unboxedSm: '26px',
    boxed: '28px',
    boxedMd: '26px',
    boxedSm: '24px',
};

export const tools = {
    boxShadow: 'none',
    smallBoxShadow: 'none',
    borderRadius: 0,
    transition: 'color,background-color 0.2s ease-in-out',
    transitionDuration: '0s',
    transitionTimingFunction: 'ease-in-out',
};


export const fontSizeMixins = {
    unboxed: {
        fontSize: fontSizes.unboxed,
        lineHeight: lineHeights.unboxed,
        [`@media (min-width: ${breakpoints.mdMin}px) and (max-width: ${breakpoints.mdMax}px)`]: {
            fontSize: fontSizes.unboxedMd,
            lineHeight: lineHeights.unboxedMd,
        },
        [`@media (max-width: ${breakpoints.smMax}px)`]: {
            fontSize: fontSizes.unboxedSm,
            lineHeight: lineHeights.unboxedSm,
        },
    },
    boxed: {
        fontSize: fontSizes.boxed,
        lineHeight: lineHeights.boxed,
        [`@media (min-width: ${breakpoints.mdMin}px) and (max-width: ${breakpoints.mdMax}px)`]: {
            fontSize: fontSizes.boxedMd,
            lineHeight: lineHeights.boxedMd,
        },
        [`@media (max-width: ${breakpoints.smMax}px)`]: {
            fontSize: fontSizes.boxedSm,
            lineHeight: lineHeights.boxedSm,
        },
    },
};


export const buttonDefaults = {
    ...fontSizeMixins.h3,
    fontFamily: fonts.secondary,
    fontWeight: 'Bold',
    letterSpacing: 0,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 30,
    paddingRight: 30,
    transition: tools.transition,
    borderRadius: 0,
    boxShadow: 'none',
    border: `1px solid ${colors.vibrate}`,
    [`@media (max-width: ${breakpoints.mdMax}px)`]: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
    },
};

export const buttons = {
    secondary: {
        ...buttonDefaults,
        color: colors.light,
        backgroundColor: colors.vibrate,
        transition: tools.transition,
        '&:hover': {
            color: colors.dark,
            backgroundColor: colors.light,
        },
    },
    primary: {
        ...buttonDefaults,
        color: colors.vibrate,
        backgroundColor: colors.light,
        transition: tools.transition,
        '&:hover': {
            color: colors.light,
            backgroundColor: colors.vibrate,
        },
    },
    text: {
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
    },
    textActive: {
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
    },
};

export const mixins = {
    h1: {
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
    },
    h2: {
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
    },
    h3: {
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
    },
    h4: {
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
    },
    h5: {
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
    },
    caption: {
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
    },
    unboxed: {
        ...fontSizeMixins.unboxed,
        color: 'inherit',
        fontFamily: fonts.primary,
        letterSpacing: 0,
        fontWeight: 'lighter',
    },
    p: {
        ...fontSizeMixins.boxed,
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
    },
    introItalic: {
        ...fontSizeMixins.unboxed,
        fontStyle: 'italic',
    },
};

export const forms = {
    input: {
        ...mixins.p,
        color: colors.dark,
        borderRadius: tools.borderRadius,
        border: `1px solid ${colors.vibrate}`,
        borderColor: buttonDefaults.borderColor,
        backgroundColor: 'white',
        marginBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        '&:focus': {
            border: `1px solid ${colors.vibrate}`,
            boxShadow: 'none'
        }
    },
    label: {
        ...mixins.p,
        fontSize: 17,
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 0,
    },
    checkBox: {
        ...mixins.p,
        fontSize: 15,
    },
    dsgvo: {
        marginBottom: 0,
        marginTop: 10,
    },
    btn: {
        marginTop: 10,
    },
};
