import React from 'react';
import {createUseStyles} from 'react-jss';

import {breakpoints} from '../../tools/styles';

const Spacer = (props) => {
    const useStyles = createUseStyles({
        span: {
            display: 'block',
            height: props.xl,
            [`@media (min-width: ${breakpoints.lgMin}px) and (max-width: ${breakpoints.lgMax}px)`]: {
                height: props.lg,
            },
            [`@media (min-width: ${breakpoints.mdMin}px) and (max-width: ${breakpoints.mdMax}px)`]: {
                height: props.md,
            },
            [`@media (min-width: ${breakpoints.smMin}px) and (max-width: ${breakpoints.smMax}px)`]: {
                height: props.sm,
            },
            [`@media (max-width: ${breakpoints.xsMax}px)`]: {
                height: props.xs,
            },
        },
    });

    const classes = useStyles();
    return <span className={classes.span}/>;

};
Spacer.defaultProps = {
    xs: 18,
    sm: 20,
    md: 25,
    lg: 30,
    xl: 30,
};

export default Spacer;
