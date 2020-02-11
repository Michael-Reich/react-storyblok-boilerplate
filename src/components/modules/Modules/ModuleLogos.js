import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {createUseStyles} from 'react-jss';

import CustomImage from '../../common/CustomImage';
import {getMarginClasses} from '../../../tools/helper';

const useStyles = createUseStyles({
    image: {
        maxWidth: '100%',
        height: 'auto',
        marginBottom: 20,
    }
});

const ModuleLogos = (props) => {

    const [module, setModule] = useState(props.module);
    const [marginClasses, setMarginClasses] = useState('');

    useEffect(() => {
        setModule(props.module);
        if (props.module) {
            setMarginClasses(getMarginClasses(props.module));
        }
    }, [props.module]);

    const classes = useStyles();

    return <div className={`${marginClasses}`}>
        <Container fluid={module.is_full_width}>
            <Row>
                {module.logos && module.logos.length > 0 && module.logos.map((item, index) => {
                    return <Col md={2} xs={4} key={index} className={'text-center'}><CustomImage image={item.logo}
                                                                                                 className={classes.image}/></Col>;
                })}
            </Row>
        </Container>
    </div>;
};

ModuleLogos.defaultProps = {
    module: {},
};

export default ModuleLogos;
