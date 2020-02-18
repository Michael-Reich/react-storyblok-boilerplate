import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {createUseStyles} from 'react-jss';

import {breakpoints, colors, mixins, tools} from '../../../tools/styles';
import CustomRichText from '../../common/CustomRichText';
import CustomImage from '../../common/CustomImage';
import ModuleWrapper from '../ModuleWrapper';
import {getMarginClasses} from '../../../tools/helper';
import Spacer from '../../common/Spacer';
import BackgroundImage from '../../common/BackgroundImage';

const useStyles = createUseStyles({
    div: {
        paddingTop: tools.padding,
        paddingBottom: tools.padding,
        backgroundColor: colors.muted,
        [`@media (max-width: ${breakpoints.smMax}px)`]: {
            paddingBottom: 0,
            paddingTop: 0,
        },
    },
    coloredDiv: {
        backgroundColor: colors.highlight,
        [`@media (max-width: ${breakpoints.smMax}px)`]: {
            paddingBottom: 0,
            paddingTop: tools.padding,
        },
    },
    smallDiv: {
        paddingTop: 0,
    },
    h1: {
        ...mixins.h1,
        marginBottom: 20,
        [`@media (max-width: ${breakpoints.mdMax}px)`]: {
            marginBottom: 10,
        },
    },
    h3: {
        ...mixins.h3,
        marginBottom: 20,
    },
    p: {
        ...mixins.unboxed,
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
    bgImage: {
        width: '100%',
        maxHeight: 400,
        height: '50vh',
    },
    imageCol: {
        [`@media (max-width: ${breakpoints.smMax}px)`]: {
            marginBottom: 20,
        },
    },
});

const ModuleIntro = (props) => {

    const classes = useStyles();

    const [module, setModule] = useState(props.module);
    const [marginClasses, setMarginClasses] = useState('');
    const [isImageLeft, setIsImageLeft] = useState(true);
    const [isSmall, setIsSmall] = useState(false);
    const [isColored, setIsColored] = useState(false);

    useEffect(() => {
        setModule(props.module);
        switch (props.module.style) {
            case 'colored':
                setIsImageLeft(false);
                setIsColored(true);
                break;

            case 'image-right':
                setIsImageLeft(false);
                break;

            case 'small':
                setIsSmall(true);
                break;

            case 'default':
            default:
                setIsImageLeft(true);
                setIsSmall(false);
                setIsColored(false);
        }
        if (props.module) {
            setMarginClasses(getMarginClasses(props.module));
        }
    }, [props.module]);

    return module.headline ? <div
        className={`${classes.div} ${isColored ? classes.coloredDiv : ''} ${isSmall ? classes.smallDiv : ''} ${marginClasses}`}>
        {isSmall && <Container fluid style={{
            marginLeft: 0,
            marginRight: 0,
            paddingLeft: 0,
            paddingRight: 0,
        }}>
            <BackgroundImage image={module.image} className={classes.bgImage}/>
            <Spacer/>
        </Container>}
        <Container fluid={module.is_full_width}>
            <Row className={'align-items-center'}>
                {!isSmall && <Col md={{span: 5, order: isImageLeft ? 1 : 2}} className={classes.imageCol}>
                    <CustomImage image={module.image} className={classes.image}/>
                </Col>}
                <Col md={{span: isSmall ? 8 : 7, order: isImageLeft ? 2 : 1, offset: isSmall ? 2 : 0}}>
                    <div className={classes.caption}
                         style={{color: isColored ? colors.light : colors.highlight,}}>{module.subline}</div>
                    <h1 className={classes.h1}
                        style={{color: isColored ? colors.light : colors.dark,}}>{module.headline}</h1>
                    <CustomRichText data={module.text} className={classes.p}
                                    style={{color: isColored ? colors.light : colors.dark,}}/>
                    {module.usps && module.usps.length > 0 && <Row>
                        {module.usps.map((usp, index) => {
                            return <Col lg={6} key={index}><ModuleWrapper module={usp} className={classes.h3}
                                                                          style={{color: isColored ? colors.light : colors.dark,}}/></Col>;
                        })}
                    </Row>}
                </Col>
            </Row>
        </Container>
    </div> : null;
};

ModuleIntro.defaultProps = {
    module: {},
};

export default ModuleIntro;
