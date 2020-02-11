import React, {useState, useEffect} from 'react';

import ModuleWrapper from './ModuleWrapper';

const ModulesWrapper = (props) => {
    const [modules, setModules] = useState(props.modules);
    useEffect(() => {
        if (props.modules) {
            setModules(props.modules);
        }
    }, [props.modules]);

    return <div>
        {modules && modules.length > 0 && modules.map((module, index) => {
            return <ModuleWrapper module={module} key={index}/>;
        })}
    </div>;
};

ModulesWrapper.defaultProps = {
    modules: [],
};

export default ModulesWrapper;
