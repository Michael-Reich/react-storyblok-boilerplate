import React, {useEffect, useState} from 'react';

const BackgroundImage = (props) => {

    const [style, setStyle] = useState();

    useEffect(() => {
        if (props.image) {
            const defaultStyle = {
                backgroundImage: `url(${props.image})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            };
            setStyle({
                ...defaultStyle,
                ...props.style,
            });
        }
    }, [props.image, props.config, props.style]);
    return props.image ? <div className={props.className} style={style}>{props.children}</div> : null;
};

BackgroundImage.defaultProps = {
    image: '',
    classname: '',
    style: {},
    config: {},
};

export default BackgroundImage;

