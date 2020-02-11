import React, {useEffect, useState, useRef} from 'react';
import Form from 'react-bootstrap/Form'
import {FaTimes} from 'react-icons/fa';
import {createUseStyles} from 'react-jss';

import {colors, tools} from '../../tools/styles';

const useStyles = createUseStyles({
    icon: {
        position: 'absolute',
        top: 15,
        right: 20,
        color: colors.dark,
        transition: tools.transition,
        cursor: 'pointer',
        '&:hover': {
            color: colors.vibrate,
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

    useEffect(() => {
        setText(props.value);
    }, [props.value]);

    const resetText = () => {
        setText('');
        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
        nativeInputValueSetter.call(textInput.current, '');
        const ev2 = new Event('input', { bubbles: true});
        textInput.current.dispatchEvent(ev2);
    };

    return <div className={classes.div}>
        <Form.Control {...props} value={text} ref={textInput}/>
        {text && <FaTimes onClick={resetText} className={classes.icon}/>}
    </div>;
};

InputText.defaultProps = {
    value: '',
    className: '',
};

export default InputText;
