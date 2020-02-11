import React from 'react';
import {createUseStyles} from 'react-jss';

import {buttons} from '../../tools/styles';

const Button = (props) => {

    const useStyles = createUseStyles({
        primaryButton: buttons.primary,
        primaryButtonActive: buttons.secondary,
        secondaryButton: buttons.secondary,
        secondaryButtonActive: buttons.primary,
        textButton: buttons.text,
        textButtonActive: buttons.textActive,
    });

    const classes = useStyles();

    switch (props.variant) {
        case 'secondary':
            return <button
                className={`${props.isActive ? classes.secondaryButtonActive : classes.secondaryButton} ${props.className}`}
                type={props.type} onClick={props.onClick} style={props.style}>{props.children}</button>;

        case 'text':
            return <button
                className={`${props.isActive ? classes.textButtonActive : classes.textButton} ${props.className}`}
                type={props.type} onClick={props.onClick} style={props.style}>{props.children}</button>;

        default:
            return <button
                className={`${props.isActive ? classes.primaryButtonActive : classes.primaryButton} ${props.className}`}
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
