import {Link} from 'react-router-dom';
import React, {useEffect, useState} from 'react';

import Button from '../../common/Button';

const ModuleButton = (props) => {
    const [module, setModule] = useState(props.module);
    useEffect(() => {
        setModule(props.module);
    }, [props.module]);

    return (module.button_url && module.button_url.cached_url !== '') ?
        <Link to={`/${module.button_url.url}`} className={props.className} style={props.style}>
            <Button {...props.buttonProps}>{module.button_text}</Button>
        </Link> : null;
};

ModuleButton.defaultProps = {
    className: '',
    style: {},
    buttonProps: {},
    module: {},
};

export default ModuleButton;
