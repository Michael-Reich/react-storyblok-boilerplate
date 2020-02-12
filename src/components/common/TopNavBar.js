import React from 'react';
import {createUseStyles} from 'react-jss';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import {mixins, tools} from '../../tools/styles';
import {colors, breakpoints} from '../../tools/styles';
import Button from './Button';

const useStyles = createUseStyles({
    div: {
        backgroundColor: `${colors.muted}!important`,
    },
    link: {
        ...mixins.h3,
        transition: tools.transition,
        color: `${colors.dark}!important`,
        fontSize: 20,
        '&:hover': {
            color: `${colors.highlight}!important`,
            textDecoration: 'none',
        },
        '&.active': {
            color: `${colors.highlight}!important`,
        },
        '& + &': {
            marginLeft: 20,
            [`@media (max-width: ${breakpoints.mdMax}px)`]: {
                marginLeft: 0,
            },
        },
    },
});

const TopNavBar = () => {
    const classes = useStyles();

    const NavLink = (props) => {
        return props.url ? <Link to={props.url} className={`${classes.link} nav-link`}
                                 data-rb-event-key={props.url}>{props.text}</Link> :
            <span className={`${classes.link} nav-link`}>{props.text}</span>;
    };

    return <Navbar bg="light" expand="lg" collapseOnSelect={true} className={classes.div}>
        <Container>
            <Navbar.Toggle aria-controls="navbar-nav"/>
            <Link className={'d-lg-none'} to={'/kontakt'}><Button variant={'text'}>Kontakt</Button></Link>

            <Navbar.Collapse id="navbar-nav">
                <Nav className="mr-auto">
                    <NavLink text={'Themen'}/>
                    <NavLink text={'Phasen'}/>
                    <NavLink text={'Leistungen'}/>
                    <NavLink url={'/blog'} text={'Blog'}/>
                    <NavLink url={'/cases'} text={'Cases'}/>
                </Nav>
                <Nav className="float-lg-right">
                    {/*<NavLink url={'/kontakt'} text={'Kontakt aufnehmen'}/>*/}
                    <Link to={'/kontakt'}><Button variant={'secondary'}>Kontakt aufnehmen</Button></Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>;
};

export default TopNavBar;
