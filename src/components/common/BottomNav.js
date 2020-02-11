import React from 'react';
import {createUseStyles} from 'react-jss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {breakpoints, colors, mixins, tools} from '../../tools/styles';
import NavLink from './NavLink';
import DetailPagesContainer from './DetailPagesContainer';
import {Route} from 'react-router-dom';
import SimpleDetailPagesHub from './SimpleDetailPagesHub';
import Button from './Button';

const useStyles = createUseStyles({
    h3: {
        ...mixins.h3,
        color: colors.light,
        lineHeight: `2!important`,
    },
    link: {
        ...mixins.p,
        transition: tools.transition,
        color: colors.light,
        textTransform: 'none',
        display: 'block',
        lineHeight: 1.3,
        '&:hover': {
            color: colors.vibrate,
            textDecoration: 'none',
        },
    },
    col: {
        [`@media (max-width: ${breakpoints.smMax}px)`]: {
            marginBottom: 20,
        },
    }
});

const BottomNav = () => {

    const classes = useStyles();

    return <Row>
        <Col md={3} xs={6} className={classes.col}>
            <DetailPagesContainer title={'Themen'} slug={'themen'} captionClasses={classes.h3}
                                  linkClasses={classes.link}/>
        </Col>
        <Col md={3} xs={6} className={classes.col}>
            <DetailPagesContainer title={'Phasen'} slug={'phasen'} captionClasses={classes.h3}
                                  linkClasses={classes.link}/>
        </Col>
        <Col md={3} xs={6} className={classes.col}>
            <DetailPagesContainer title={'Leistungen'} slug={'leistungen'} captionClasses={classes.h3}
                                  linkClasses={classes.link}/>
        </Col>
        <Col md={3} xs={6} className={classes.col}>
            <h3 className={classes.h3}>Links</h3>
            <NavLink url={'/kontakt'} text={'Kontakt'} className={classes.link}/>
            <NavLink extern={'https://outlook.office365.com/owa/calendar/WSUBeratungsgesellschaftmbH1@wsu-beratung.de/bookings/s/uGsPPrxZm0eYDQNJQtgevA2'} text={'Beratungsgespräch'} className={classes.link}/>
            <NavLink url={'/impressum'} text={'Impressum'} className={classes.link}/>
            <NavLink url={'/datenschutz'} text={'Datenschutz'} className={classes.link}/>
            {navigator.userAgent === 'ReactSnap' &&
            <NavLink url={'/gebiete'} text={'Gebiete'} className={classes.link}/>}
        </Col>
    </Row>;
};

export default BottomNav;
