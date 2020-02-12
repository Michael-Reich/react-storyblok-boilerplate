import React from 'react';
import {createUseStyles} from 'react-jss';
import {FaFacebookSquare, FaInstagram, FaLinkedin} from 'react-icons/fa';

import {tools, colors} from '../../tools/styles';

const SocialMediaLinks = (props) => {
    const useStyles = createUseStyles({
        icon: {
            display: 'inline-block',
            transition: tools.transition,
            color: colors.light,
            marginBottom: 10,
            marginTop: 10,
            borderRadius: 100,
            cursor: 'pointer',
            '& + &': {
                marginLeft: props.marginSide,
            },
            '&:hover': {
                color: colors.highlight,
            },
        },
    });

    const classes = useStyles();

    return <div className={props.className} style={props.style}>
        <div className={classes.div}>
            <a href={'https://www.facebook.com/wsuberatung/'} target={'_blank'} className={classes.icon}>
                <FaFacebookSquare size={props.size}/>
            </a>
            <a href={'https://www.instagram.com/wsuberatung/'} target={'_blank'} className={classes.icon}>
                <FaInstagram size={props.size}/>
            </a>
            <a href={'https://www.linkedin.com/company/wsu---wolfgang-sass-unternehmensberatung'} target={'_blank'} className={classes.icon}>
                <FaLinkedin size={props.size}/>
            </a>
        </div>
    </div>;
};

SocialMediaLinks.defaultProps = {
    style: {},
    className: '',
    size: 30,
    marginSide: 12,
};

export default SocialMediaLinks;
