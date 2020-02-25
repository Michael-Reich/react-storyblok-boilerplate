import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {createUseStyles} from 'react-jss';

import CustomImage from '../../common/CustomImage';
import {getBootstrapColClasses, getMarginClasses} from '../../../tools/helper';
import {tools} from '../../../tools/styles';

const useStyles = createUseStyles({
    image: {
        width: '100%',
        height: 'auto',
    },
});

const ModuleImages = (props) => {

    const [module, setModule] = useState(props.module);
    const [marginClasses, setMarginClasses] = useState('');
    const [itemClasses, setItemClasses] = useState('');

    useEffect(() => {
        setModule(props.module);
        if (props.module) {
            setMarginClasses(getMarginClasses(props.module));
            setItemClasses(getBootstrapColClasses(props.module, 'item_classes'));
        }
    }, [props.module]);

    const classes = useStyles();

    return <div className={`${marginClasses}`}>
        <Container fluid={module.is_full_width}>
            <Row>
                {module.images && module.images.map((itm, index) => {
                    return <div key={index} className={`${itemClasses || 'col'}`} style={{marginBottom: tools.margin,}}>
                        <CustomImage image={itm.filename} className={classes.image} alt={itm.name}/>
                    </div>;
                })}
            </Row>
        </Container>
    </div>;
};

ModuleImages.defaultProps = {
    module: {},
};

export default ModuleImages;
