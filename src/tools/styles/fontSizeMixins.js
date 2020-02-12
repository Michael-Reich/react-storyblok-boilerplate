import {lineHeights} from './lineHeights';
import {breakpoints} from './breakpoints';

const fontSizes = {
    unboxed: 26,
    unboxedMd: 22,
    unboxedSm: 18,
    boxed: 20,
    boxedMd: 18,
    boxedSm: 16,
};

const unboxed = {
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
};

const boxed = {
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
};

export const fontSizeMixins = {
    unboxed,
    boxed,
};
