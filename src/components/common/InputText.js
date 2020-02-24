import React, {useEffect, useState, useRef} from 'react';
import Form from 'react-bootstrap/Form';
import {createUseStyles} from 'react-jss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSpinner, faTimes} from '@fortawesome/free-solid-svg-icons';

import {colors, tools} from '../../tools/styles';

const useStyles = createUseStyles({
    spinner: {},
    icon: {
        position: 'absolute',
        top: 15,
        right: 20,
        color: colors.dark,
    },
    cta: {
        cursor: 'pointer',
        transition: tools.transition,
        '&:hover': {
            color: colors.highlight,
        },
    },
    div: {
        position: 'relative',
    }
});

const InputText = (props) => {

    const classes = useStyles();

    const textInput = useRef();
    const [text, setText] = useState(props.value);
    const [pProps, setProps] = useState({});

    useEffect(() => {
        const tempProps = {...props};
        delete tempProps.isLoading;
        setProps(tempProps);
    }, [props]);

    useEffect(() => {
        setText(props.value);
    }, [props.value]);

    const resetText = () => {
        setText('');
        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
        nativeInputValueSetter.call(textInput.current, '');
        const ev2 = new Event('input', {bubbles: true});
        textInput.current.dispatchEvent(ev2);
    };

    return <div className={classes.div}>
        <Form.Control {...pProps} value={text} ref={textInput} onChange={props.onChange}/>
        {props.isLoading ?
            <FontAwesomeIcon icon={faSpinner} className={`${classes.icon} fa-spin`}/>
            : <span>{text &&
            <FontAwesomeIcon icon={faTimes} onClick={resetText} className={`${classes.cta} ${classes.icon}`}/>}</span>
        }
    </div>;
};

InputText.defaultProps = {
    value: '',
    className: '',
    isLoading: false,
    onChange: ()=>{},
};

export default InputText;
