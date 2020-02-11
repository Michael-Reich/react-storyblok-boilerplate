import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import {createUseStyles} from 'react-jss';

import {breakpoints, colors, mixins, tools} from '../../../tools/styles';
import ModuleWrapper from '../ModuleWrapper';
import {getBootstrapColClasses, getMarginClasses} from '../../../tools/helper';

const ModuleBoxes = (props) => {

    const useStyles = createUseStyles({
        div: {
            color: colors.dark,
        },
        h2: {
            ...mixins.h2,
            color: colors.dark,
            marginBottom: 50,
            [`@media (max-width: ${breakpoints.mdMax}px)`]: {
                marginBottom: 30,
            },
        },
        caption: {
            ...mixins.caption,
            color: colors.vibrate,
            '&>a': {
                color: 'inherit',
                transition: tools.transition,
                '&:hover': {
                    color: colors.vibrate,
                    textDecoration: 'none',
                },
            },
        },
    });

    const [module, setModule] = useState(props.module);
    const [marginClasses, setMarginClasses] = useState('');
    const [boxBootstrapClasses, setBoxBootstrapClasses] = useState('');
    useEffect(() => {
        setModule(props.module);
        if (props.module) {
            setMarginClasses(getMarginClasses(props.module, 'margin'));
            setBoxBootstrapClasses(getBootstrapColClasses(props.module, 'box_bootstrap_classes'));
        }
    }, [props.module]);

    const classes = useStyles();

    return <div className={`${classes.div} ${marginClasses}`}>
        <Container fluid={module.is_full_width}>
            <Row>
                <Col>
                    <div className={classes.h3}>{module.subline}</div>
                    <h2 className={classes.h2}>{module.headline}</h2>
                </Col>
            </Row>
            <div className={'d-none d-md-block'}>
                {module.boxes && module.boxes.length > 0 && <Row>
                    {module.boxes.map((item, index) => {
                        return <div className={`col ${boxBootstrapClasses}`} key={index}>
                            <ModuleWrapper module={item} payload={{style: module.style}}/>
                        </div>;
                    })}
                </Row>}
            </div>


            <div className={'d-md-none'}>
                {module.boxes && module.boxes.length > 0 && <Carousel interval={null}>
                    {module.boxes.map((item, index) => {
                        return <Carousel.Item key={index} style={{padding: 20}}>
                            <ModuleWrapper module={item}/>
                        </Carousel.Item>;
                    })}
                </Carousel>}
            </div>
        </Container>
    </div>;
};

ModuleBoxes.defaultProps = {
    module: {},
};

export default ModuleBoxes;
