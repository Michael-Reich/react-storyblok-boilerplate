import React, {useEffect, useState} from 'react';
import {createUseStyles} from 'react-jss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons';
import {faSquare} from '@fortawesome/free-regular-svg-icons';

const useStyles = createUseStyles({
    span: {
        // position: 'relative',
    },
    icon: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        left: 0,
    },
});

const CustomCheckBox = (props) => {

    const classes = useStyles();

    const [innerProps, setInnerProps] = useState({});

    useEffect(() => {
        const tempProps = {...props};
        tempProps.type = "checkbox";
        tempProps.style = {...tempProps.style, opacity: 0};
        delete tempProps.className;
        setInnerProps(tempProps);
    }, [props]);

    return <span className={classes.span}>
        <FontAwesomeIcon icon={props.checked ? faCheckSquare : faSquare} onClick={props.onChange}
                         className={`${classes.icon} ${props.className}`} style={props.style}/>
        <input className={`${classes.icon} ${props.className}`} {...innerProps}/>

    </span>;
};

CustomCheckBox.defaultProps = {
    checked: false,
    required: false,
    className: '',
    style: {},
    onClick: () => {
    },
    onChange: () => {
    },
};

export default CustomCheckBox;
