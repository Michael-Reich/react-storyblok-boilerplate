import React from 'react';
import {Link} from 'react-router-dom';
import {createUseStyles} from 'react-jss';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {FaStar} from 'react-icons/fa';

import {breakpoints, colors, mixins, tools} from '../../tools/styles';
import BottomNav from './BottomNav';
import Spacer from './Spacer';
import SocialMediaLinks from './SocialMediaLinks';

const useStyles = createUseStyles({
    footer: {
        backgroundColor: colors.dark,
        color: colors.light,
        paddingBottom: tools.padding,
        paddingTop: tools.padding,
    },
    p: {
        ...mixins.p,
        lineHeight: '34px',
        color: colors.light,
    },
    bottomNav: {
        [`@media (max-width: ${breakpoints.smMax}px)`]: {
            marginTop: tools.marginSmall,
        },
    },
    logo: {
        maxWidth: '100%',
        height: 'auto',
    }
});

const Footer = () => {
    const classes = useStyles();
    return <div className={classes.footer}>
        <Container>
            <Row className={'align-items-center'}>
                <Col lg={4} className={'text-xs-left text-sm-center text-lg-left'}>
                    <Link to={`/`}>
                        <img className={classes.logo} src={`/images/logo-white.png`} alt=""/>
                    </Link>
                </Col>
                <Col className={'text-xs-left text-sm-center'} lg={5}>
                    <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/> 4,7 / 5 Google Bewertungen
                </Col>
                <Col className={'text-xs-left text-sm-center'} lg={3}>
                    <SocialMediaLinks/>
                </Col>
            </Row>
            <Spacer/>
            <div className={classes.bottomNav}>
                <BottomNav/>
            </div>
        </Container>
    </div>;
};

export default Footer;
