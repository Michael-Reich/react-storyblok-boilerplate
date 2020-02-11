import React from 'react';
import {Link} from 'react-router-dom';

const NavLink = (props) => {
    if (props.url) {
        return <Link to={props.url} className={props.className} style={props.style}><small>{props.text}</small></Link>;
    }
    if (props.extern) {
        return <a href={props.extern} target={'_blank'} className={props.className}
                  style={props.style}><small>{props.text}</small></a>;
    }
    return null;
};

NavLink.defaultProps = {
    url: '',
    extern: '',
    text: '',
    className: '',
    style: {},
};

export default NavLink;
