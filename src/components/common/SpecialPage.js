import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {createUseStyles} from 'react-jss';
import Container from 'react-bootstrap/Container';

import Button from './Button';
import {mixins, tools} from '../../tools/styles';
import Spacer from './Spacer';

const SpecialPage = (props) => {

    const [caption, setCaption] = useState('');
    const [text, setText] = useState(undefined);

    useEffect(() => {
        setCaption(props.caption);
    }, [props.caption]);

    useEffect(() => {
        setText(props.text);
    }, [props.text]);

    const useStyles = createUseStyles({
        h1: {
            ...mixins.h1,
        },
        unboxed: {
            ...mixins.unboxed,
            marginTop: tools.margin,
            marginBottom: tools.margin,
        },
    });

    const classes = useStyles();

    return <Container className={props.className} style={props.style}>
        <h1 className={classes.h1}>{caption}</h1>
        {text && <p className={classes.unboxed}>{text}</p>}
        <Spacer/>
        <Link to={'/'}><Button>Zur Startseite</Button></Link>
        <Spacer/>
    </Container>;
};

SpecialPage.defaultProps = {
    style: {},
    className: '',
    text: '',
    caption: '',
};

export default SpecialPage;
