import React, {useState, useEffect} from 'react';
import {createUseStyles} from 'react-jss';
import {Link} from 'react-router-dom';

import {entityFrontendSlug} from '../../entities/blog';
import {colors, mixins, tools} from '../../tools/styles';
import Spacer from '../../components/common/Spacer';
import Button from '../../components/common/Button';
import BackgroundImage from '../../components/common/BackgroundImage';

const useStyles = createUseStyles({
    div: {
        borderRadius: tools.borderRadius,
        boxShadow: tools.boxShadow,
        overflow: 'hidden',
        backgroundColor: colors.light,
        height: '100%',
        position: 'relative',
        paddingBottom: 40,
    },
    text: {
        padding: tools.padding,
        textAlign: 'center',
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
        width: '100%',
        height: 200,
    },
    cta: {
        position: 'absolute',
        bottom: 30,
        left: '50%',
        width: '100%',
        transform: 'translate(-50%, 0)'
    }
});

const BlogItem = (props) => {
    const classes = useStyles();

    const [item, setItem] = useState(props.item);
    useEffect(() => {
        setItem(props.item);
    }, [props.item]);

    return item.content ? <div className={`${classes.div} ${props.className}`} style={props.style}>
        <Link to={`/${entityFrontendSlug}/${item.slug}`}>
            <BackgroundImage image={item.content.image} className={classes.image}/>
        </Link>
        <div className={classes.text}>
            <h2 className={classes.h3}>{item.name}</h2>
            <Spacer/>
            {item.content.previewText && <div>
                <div className={classes.p}>
                    {item.content.previewText}
                </div>
                <Spacer/>
            </div>}
            <Link to={`/${entityFrontendSlug}/${item.slug}`} className={classes.cta}>
                <Button variant={'secondary'}>Mehr erfahren</Button>
            </Link>
        </div>

    </div> : null;
};

BlogItem.defaultProps = {
    className: '',
    style: {},
    item: {},
};

export default BlogItem;
