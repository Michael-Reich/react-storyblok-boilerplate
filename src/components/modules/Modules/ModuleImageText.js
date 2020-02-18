import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {createUseStyles} from 'react-jss';

import {breakpoints, colors, mixins, tools} from '../../../tools/styles';
import CustomRichText from '../../common/CustomRichText';
import CustomImage from '../../common/CustomImage';
import ModuleButton from '../Components/ModuleButton';
import Spacer from '../../common/Spacer';
import {getMarginClasses} from '../../../tools/helper';

const ModuleImageText = (props) => {

    const useStyles = createUseStyles({
        div: {
            color: colors.dark,
            alignItems: 'center',
        },
        borderImage: {
            maxWidth: '15%'
        },
        h2: {
            ...mixins.h2,
            marginBottom: 20,
            [`@media (max-width: ${breakpoints.mdMax}px)`]: {
                marginBottom: 10,
            },
        },
        p: {
            ...mixins.p,
            color: 'inherit',
            marginBottom: tools.margin,
            [`@media (max-width: ${breakpoints.mdMax}px)`]: {
                marginBottom: 10,
            },
        },
        caption: {
            ...mixins.caption,
            color: colors.highlight,
            '&>a': {
                color: 'inherit',
                transition: tools.transition,
                '&:hover': {
                    color: colors.highlight,
                    textDecoration: 'none',
                },
            },
        },
        image: {
            width: '100%',
            height: 'auto',
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

    const classes = useStyles();

    return <div className={`${classes.div} ${marginClasses} d-md-flex d-sm-block`} style={{
        color: module.isDark ? colors.light : colors.dark,
        flexDirection: module.imageLeft ? 'row' : 'row-reverse',
    }}>
        <CustomImage image={module.borderImage} className={`${classes.borderImage} d-none d-md-flex`}/>
        <div>
            <Container fluid={module.is_full_width}>
                <Row className={'align-items-center'}>
                    <Col md={{span: 6, order: module.imageLeft ? 1 : 2,}} xs={{span: 12, order: 2}}>
                        <div className={classes.caption}>{module.subline}</div>
                        <h2 className={classes.h2}
                            style={{color: module.isDark ? colors.highlight : colors.dark}}>{module.headline}</h2>
                        <CustomRichText data={module.text} className={classes.p}/>
                        <ModuleButton module={module}/>
                    </Col>
                    <Col md={{span: 5, order: module.imageLeft ? 2 : 1,}} xs={{span: 12, order: 1}}>
                        <CustomImage image={module.mainImage} className={classes.image}/>
                        <Spacer/>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>;
};

ModuleImageText.defaultProps = {
    module: {},
};

export default ModuleImageText;
