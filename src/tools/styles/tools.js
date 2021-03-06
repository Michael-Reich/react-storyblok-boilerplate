import {colors} from './colors';

const boxShadow = 'none';
const borderRadius = 0;
const borderWidth = 2;
const borderStyle = 'solid';
const border = `${borderWidth}px ${borderStyle} ${colors.highlight}`;
const transitionDuration = '0.2s';
const transitionTimingFunction = 'ease-in-out';
const transition = `border,color,background-color ${transitionDuration} ${transitionTimingFunction}`;
const padding = 30;
const paddingSmall = 20;
const margin = 30;
const marginSmall = 20;

export const tools = {
    boxShadow,
    borderRadius,
    border,
    borderWidth,
    borderStyle,
    transitionDuration,
    transitionTimingFunction,
    transition,
    padding,
    paddingSmall,
    margin,
    marginSmall,
};
