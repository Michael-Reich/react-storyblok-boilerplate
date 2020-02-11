import React from 'react';

const CustomImage = (props) => {
    return props.image ?
        <img className={props.className} src={props.image} alt={props.alt} style={props.style}/> : null;
};

CustomImage.defaultProps = {
    image: '',
    className: '',
    style: {},
    alt: '',
};

export default CustomImage;
