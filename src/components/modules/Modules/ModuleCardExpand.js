import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {createUseStyles} from 'react-jss';
import {Link} from 'react-router-dom';

import {colors, mixins, tools} from '../../../tools/styles';
import Button from '../../common/Button';
import CustomImage from '../../common/CustomImage';
import {CustomRichText} from '../../common/CustomRichText';
import {getMarginClasses} from '../../../tools/helper';

const ModuleCardExpand = (props) => {

    const useStyles = createUseStyles({
        div: {
            borderRadius: tools.borderRadius,
            boxShadow: tools.boxShadow,
            marginBottom: 30,
        },
        h2: {
            ...mixins.h2,
            color: colors.dark,
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
        image: {
            maxWidth: '100%',
            height: 'auto',
        },
        col: {
            padding: 30,
        },
        p: {
            ...mixins.p,
            marginTop: 20,
            marginBottom: 20,
            color: colors.dark,
        },
        isOpen: {
            color: colors.light,
            backgroundColor: colors.vibrate,
            '& $h2,$caption,$p': {
                color: colors.light,
            },
        },
    });

    const [module, setModule] = useState(props.module);
    const [marginClasses, setMarginClasses] = useState('');

    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        setModule(props.module);
        if (props.module) {
            setMarginClasses(getMarginClasses(props.module));
        }
    }, [props.module]);

    const classes = useStyles();

    return <div className={`${marginClasses}`}>
        <Container fluid={module.is_full_width}>
            <div className={`${classes.div} ${isOpen ? classes.isOpen : ''}`}>
                <Row>
                    <Col md={3}>
                        <div className={`${classes.col} text-center`}>
                            <CustomImage image={module.image} className={classes.image}/>
                        </div>
                    </Col>
                    <Col md={8}>
                        <div className={classes.col}>
                            <div className={classes.caption}>{module.subline}</div>
                            <h2 className={classes.h2}>{module.headline}</h2>
                            {!isOpen ? <CustomRichText data={module.previewText} className={classes.p}/>
                                : <CustomRichText data={module.longText} className={classes.p}/>}
                            <Button variant={'secondary'}
                                    onClick={() => setOpen(!isOpen)}>Zeige {!isOpen ? <span>mehr</span> :
                                <span>weniger</span>}</Button>
                            {isOpen && <Link to={'/kontakt'} style={{marginLeft: 20}}>
                                <Button>Kontakt</Button>
                            </Link>}
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </div>;
};

ModuleCardExpand.defaultProps = {
    module: {},
};

export default ModuleCardExpand;
