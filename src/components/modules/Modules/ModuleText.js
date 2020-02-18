import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {createUseStyles} from 'react-jss';

import CustomRichText from '../../common/CustomRichText';
import {getMarginClasses} from '../../../tools/helper';
import {colors, mixins} from '../../../tools/styles';

const useStyles = createUseStyles({
    h2: {
        ...mixins.h2,
        marginBottom: 20,
        color: colors.dark,
    },
    p: {
        ...mixins.unboxed,
        color: colors.dark,
    },
    caption: {
        ...mixins.caption,
        color: colors.highlight,
    },
});

const ModuleText = (props) => {

    const classes = useStyles();

    const [module, setModule] = useState(props.module);
    const [marginClasses, setMarginClasses] = useState('');

    useEffect(() => {
        setModule(props.module);
        if (props.module) {
            setMarginClasses(getMarginClasses(props.module));
        }
    }, [props.module]);

    return <div className={`${marginClasses}`}>
        <Container fluid={module.is_full_width}>
            <Row>
                <Col style={{textAlign: module.textAlign || 'left'}}
                     md={{span: module.offset ? 8 : 12, offset: module.offset ? 2 : 0}}>
                    <div className={classes.caption}>{module.subline}</div>
                    <h2 className={classes.h2}>{module.headline}</h2>
                    <CustomRichText data={module.text} className={classes.p}/>
                </Col>
            </Row>
        </Container>
    </div>;
};

ModuleText.defaultProps = {
    module: {},
};

export default ModuleText;
