import React from 'react';
import {createUseStyles} from 'react-jss';

import {buttons} from '../../tools/styles';

const Button = (props) => {

    const useStyles = createUseStyles({
        primary: buttons.primary,
        secondary: buttons.secondary,
        textButton: buttons.text,
        textButtonActive: buttons.textActive,
    });

    const classes = useStyles();

    switch (props.variant) {
        case 'secondary':
            return <button
                className={`${props.isActive ? classes.primary : classes.secondary} ${props.className}`}
                type={props.type} onClick={props.onClick} style={props.style}>{props.children}</button>;

        case 'text':
            return <button
                className={`${props.isActive ? classes.textButtonActive : classes.textButton} ${props.className}`}
                type={props.type} onClick={props.onClick} style={props.style}>{props.children}</button>;

        default:
            return <button
                className={`${props.isActive ? classes.secondary : classes.primary} ${props.className}`}
                type={props.type} onClick={props.onClick} style={props.style}>{props.children}</button>;
    }

};

Button.defaultProps = {
    style: {},
    variant: 'primary', // 'secondary', 'text,
    isActive: false,
    className: '',
    onClick: () => {
    },
    type: 'button',
};

export default Button;
