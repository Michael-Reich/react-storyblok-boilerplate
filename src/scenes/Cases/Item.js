import React, {useState, useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {createUseStyles} from 'react-jss';
import {Link} from 'react-router-dom';

import {entityFrontendSlug} from '../../entities/cases';
import {colors, mixins, tools} from '../../tools/styles';
import Button from '../../components/common/Button';
import BackgroundImage from '../../components/common/BackgroundImage';
import CustomImage from '../../components/common/CustomImage';
import Spacer from '../../components/common/Spacer';

const useStyles = createUseStyles({
    div: {
        borderRadius: tools.borderRadius,
        boxShadow: tools.boxShadow,
        overflow: 'hidden',
        marginBottom: tools.margin,
        backgroundColor: colors.light,
    },
    text: {
        padding: tools.padding,
    },
    caption: {
        ...mixins.caption,
    },
    p: {
        ...mixins.p,
    },
    h3: {
        ...mixins.h3,
    },
    image: {
        minHeight: 200,
        width: '100%',
        height: '100%',
    }
});

const CaseItem = (props) => {
    const classes = useStyles();

    const [item, setItem] = useState(props.item);
    useEffect(() => {
        setItem(props.item);
    }, [props.item]);

    return item.content ? <div className={`${classes.div} ${props.className}`} style={props.style}>
        <Row>
            <Col md={4}>
                <Link to={`/${entityFrontendSlug}/${item.slug}`}>
                    <BackgroundImage image={item.content.image} className={classes.image}/>
                </Link>
            </Col>
            <Col md={8}>
                <div className={classes.text}>
                    <h2 className={classes.h3}>{item.name}</h2>
                    <Spacer/>
                    <div className={classes.p}>
                        {item.content.previewText}
                    </div>
                    <Spacer/>
                    <Link to={`/${entityFrontendSlug}/${item.slug}`}>
                        <Button variant={'secondary'}>Mehr erfahren</Button>
                    </Link>
                    <CustomImage image={item.content.companyLogo}/>
                </div>
            </Col>
        </Row>
    </div> : null;
};

CaseItem.defaultProps = {
    className: '',
    style: {},
    item: {},
};

export default CaseItem;
