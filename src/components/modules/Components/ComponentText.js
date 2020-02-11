import React, {useState, useEffect} from 'react';

import {getMarginClasses} from '../../../tools/helper';

const ComponentText = (props) => {

    const [module, setModule] = useState(props.module);
    const [marginClasses, setMarginClasses] = useState('');
    useEffect(() => {
        setModule(props.module);
        if (props.module) {
            setMarginClasses(getMarginClasses(props.module));
        }
    }, [props.module]);

    return <div className={`${props.className} ${marginClasses}`} style={props.style}>
        {module.text}
    </div>;
};

ComponentText.defaultProps = {
    module: {},
    className: '',
    style: {},
};

export default ComponentText;
