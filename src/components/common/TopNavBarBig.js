import React, {useState} from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router-dom';
import {createUseStyles} from 'react-jss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import {colors, fonts, mixins, tools, breakpoints} from '../../tools/styles';
import Button from './Button';
import DetailPagesContainerTopBar from './DetailPagesContainerTopBar';

const useStyles = createUseStyles({
    navBar: {
        padding: 26,
        zIndex: 990,
        fontFamily: fonts.headline,
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: '27px',
        letterSpacing: 0,
        backgroundColor: `${colors.muted}!important`,
        [`@media (max-width: ${breakpoints.lgMax}px)`]: {
            paddingTop: 26,
            paddingBottom: 26,
            paddingLeft: 20,
            paddingRight: 20
        },
    },
    navBarLink: {
        ...mixins.h3,
        transition: tools.transition,
        color: `${colors.dark}!important`,
        '&>a': {
            paddingLeft: '25px !important',
            paddingRight: '25px !important',
            fontWeight: '400 !important',
            color: `${colors.dark}!important`,
            '&:hover': {
                opacity: 0.7,
            },
            '&:after': {
                display: 'none',
            },
            [`@media (max-width: ${breakpoints.lgMax}px)`]: {
                paddingLeft: '5px !important',
                paddingRight: '5px !important',
                textAlign: 'center',
            },
        },
        '& .dropdown-menu': {
            borderRadius: tools.borderRadius,
            minWidth: '20rem',
            border: 0,
            marginTop: 0,
            paddingTop: 8,
            paddingBottom: 8,
            right: 'auto',
            left: '50%',
            transform: 'translate(-50%, 0)',
            boxShadow: tools.boxShadow,
            [`@media (max-width: ${breakpoints.lgMax}px)`]: {
                position: 'relative',
            },
            '&:before': {
                content: '""',
                position: 'absolute',
                display: 'block',
            },
            '&:after': {
                content: '""',
                position: 'absolute',
                display: 'block',
                left: '50%',
                transform: 'translateX(-50%)',
                top: -7,
                width: 0,
                height: 0,
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
                borderBottom: `10px solid ${colors.light}`,
            }
        },
        '&:visited, &:link': {
            color: 'rgba(255,255,255,0.8)!important',
        },
        '&:hover': {
            color: 'rgba(255,255,255,0.5)!important',
        },
        '&.active': {
            color: `${colors.highlight}!important`,
        },
    },
    box: {
        float: 'left',
        borderRadius: 50,
        backgroundColor: colors.muted,
        height: 25,
        width: 25,
        border: 0,
        textAlign: 'center',
        marginRight: 16,
        marginLeft: 16,
        fontSize: 12,
        lineHeight: '25px',
        marginTop: 0,
    },
    item: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 20,
        paddingRight: 20,
        lineHeight: '25px',
        backgroundColor: 'transparent!important',
        '&:hover': {
            color: colors.dark,
        }
    },
    navBarInner: {
        marginTop: 15,
        marginBottom: 10,
    },
    logo: {
        marginRight: 70,
        height: 40,
        width: 40,
        [`@media (max-width: ${breakpoints.mdMax}px)`]: {
            marginRight: 10,
        },
    },
});

const TopNavBarBig = (props) => {

    const classes = useStyles();

    const [navExpanded, setNavExpanded] = useState(false);

    const clickBurgerMenu = (expanded) => {
        setNavExpanded(expanded);
    };
    const linkClick = () => {
        setNavExpanded(false);
    };

    return <Navbar expand="lg" variant="light" className={classes.navBar} collapseOnSelect={true}
                   expanded={navExpanded}
                   onToggle={(expanded) => clickBurgerMenu(expanded)}>
        <Container>
            <Link to={'/'} className={classes.logo}><img className={classes.logo} src={`/images/logo-green.png`} alt=""/></Link>
            <Link to={'/kontakt'} className={'d-flex d-lg-none'}><Button variant={'secondary'}>Kontakt aufnehmen</Button></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse className={`justify-content-between align-items-center w-100`}>
                <Nav className={`${classes.navBarInner} mx-auto`}>
                    <DetailPagesContainerTopBar title={'Themen'}
                                                slug={'themen'}
                                                captionClasses={classes.navBarLink}
                                                linkClasses={classes.item}
                                                onClick={linkClick}/>

                    <DetailPagesContainerTopBar title={'Phasen'}
                                                slug={'phasen'}
                                                captionClasses={classes.navBarLink}
                                                linkClasses={classes.item}
                                                onClick={linkClick}/>

                    <DetailPagesContainerTopBar title={'Leistungen'}
                                                slug={'leistungen'}
                                                captionClasses={classes.navBarLink}
                                                linkClasses={classes.item}
                                                onClick={linkClick}/>

                    <div className={`${classes.navBarLink}`}>
                        <LinkContainer to={`/blog`} onClick={linkClick}>
                            <Nav.Link>Blog</Nav.Link>
                        </LinkContainer>
                    </div>
                    <div className={`${classes.navBarLink}`}>
                        <LinkContainer to={`/cases`} onClick={linkClick}>
                            <Nav.Link>Cases</Nav.Link>
                        </LinkContainer>
                    </div>
                    <div className={`${classes.navBarLink} d-md-block d-lg-none`}>
                        <LinkContainer to={`/kontakt`} onClick={linkClick}>
                            <Nav.Link><b>Kontakt</b></Nav.Link>
                        </LinkContainer>
                    </div>
                </Nav>
            </Navbar.Collapse>
            <div className={`${classes.navBarLink} d-none d-lg-block`} style={{whiteSpace: 'nowrap'}}>
                <Link to={'/kontakt'}><Button>Kontakt aufnehmen</Button></Link>
            </div>
        </Container>
    </Navbar>;
};

export default TopNavBarBig;
