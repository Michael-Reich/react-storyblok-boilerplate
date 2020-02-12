import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {createUseStyles} from 'react-jss';
import {Link} from 'react-router-dom';

import {colors, mixins, tools} from '../../../tools/styles';
import Button from '../../common/Button';
import {getMarginClasses} from '../../../tools/helper';

const ModuleProjectTeaser = (props) => {

    const useStyles = createUseStyles({
        div: {
            color: colors.dark,
            paddingTop: 50,
            paddingBottom: 50,
        },
        h2: {
            ...mixins.h2,
            color: colors.dark,
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

    return <div className={`${classes.div} ${marginClasses}`}>
        <Container fluid={module.is_full_width}>
            <Row className={'align-items-center'}>
                <Col>
                    <div className={classes.caption}>{module.subline}</div>
                    <h2 className={classes.h2}>{module.headline}</h2>
                </Col>
                <Col className={'text-right'}>
                    <Link to={`/cases`}>
                        <Button variant={'secondary'}>Zeige alle</Button>
                    </Link>
                </Col>
            </Row>

        </Container>
    </div>;
};

ModuleProjectTeaser.defaultProps = {
    module: {},
};

export default ModuleProjectTeaser;
