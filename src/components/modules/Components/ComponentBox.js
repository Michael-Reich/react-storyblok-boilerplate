import React, {useState, useEffect} from 'react';
import {createUseStyles} from 'react-jss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {breakpoints, colors, mixins, tools} from '../../../tools/styles';
import CustomRichText from '../../common/CustomRichText';
import CustomImage from '../../common/CustomImage';
import {getMarginClasses} from '../../../tools/helper';
import ModuleButton from './ModuleButton';

const ComponentBox = (props) => {

    const useStyles = createUseStyles({
        div: {
            color: colors.dark,
            padding: tools.padding,
            boxShadow: tools.boxShadow,
            borderRadius: tools.borderRadius,
            backgroundColor: colors.light,
            marginBottom: 20,
            [`@media (max-width: ${breakpoints.smMax}px)`]: {
                marginBottom: 10,
            },
        },
        h3: {
            ...mixins.h3,
            marginBottom: 20,
            marginTop: 20,
        },
        image: {
            width: '100%',
            maxWidth: 80,
            height: 'auto',
        },
        p: {
            ...mixins.p,
        },
        button: {
            display: 'inline-block',
        },
    });

    const [module, setModule] = useState(props.module);
    const [marginClasses, setMarginClasses] = useState('');
    useEffect(() => {
        setModule(props.module);
        if (props.module) {
            setMarginClasses(getMarginClasses(props.module));
        }
    }, [props.module]);

    const [payload, setPayload] = useState(props.payload);
    useEffect(() => {
        setPayload(props.payload);
    }, [props.payload]);

    const classes = useStyles();

    return <div className={`${classes.div} ${marginClasses} ${props.className}`}
                style={{...props.style, textAlign: payload.style === 'compact' ? 'left' : 'center'}}>
        <Row className={'align-items-center'}>
            {module.image && <Col xs={{span: payload.style === 'compact' ? 3 : 12}}>
                <CustomImage image={module.image} className={classes.image}/>
            </Col>}
            <Col xs={{span: module.image && payload.style === 'compact' ? 9 : 12}}>
                <h3 className={classes.h3}>{module.headline}</h3>
            </Col>
        </Row>


        <CustomRichText data={module.text} className={classes.p}/>
        <ModuleButton module={module} className={classes.button} buttonProps={{variant: 'secondary'}}/>
    </div>;
};

ComponentBox.defaultProps = {
    module: {},
    className: '',
    style: {},
    payload: {},
};

export default ComponentBox;
