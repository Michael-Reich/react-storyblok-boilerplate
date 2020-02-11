import React, {useState, useEffect} from 'react';

import ModuleIntro from './Modules/ModuleIntro';
import ModuleImageText from './Modules/ModuleImageText';
import ModuleBoxes from './Modules/ModuleBoxes';
import ComponentBox from './Components/ComponentBox';
import ComponentText from './Components/ComponentText';
import ModuleProjectTeaser from './Modules/ModuleProjectTeaser';
import ModuleContact from './Modules/ModuleContact';
import ModuleCardExpand from './Modules/ModuleCardExpand';
import ModuleLogos from './Modules/ModuleLogos';
import ModuleText from './Modules/ModuleText';
import ModuleBlogTeaser from './Modules/ModuleBlogTeaser';
import ModuleCaseTeaser from './Modules/ModuleCaseTeaser';

const ModuleWrapper = (props) => {

    const [module, setModule] = useState(props.module);
    useEffect(() => {
        if (props.module) {
            setModule(props.module);
        }
    }, [props.module]);

    if (module && module.component) {
        switch (module.component) {
            case 'module_intro':
                return <ModuleIntro module={module} className={props.className} style={props.style} payload={props.payload}/>;

            case 'module_imageText':
                return <ModuleImageText module={module} className={props.className} style={props.style} payload={props.payload}/>;

            case 'module_boxes':
                return <ModuleBoxes module={module} className={props.className} style={props.style} payload={props.payload}/>;

            case 'module_projectTeaser':
                return <ModuleProjectTeaser module={module} className={props.className} style={props.style} payload={props.payload}/>;

            case 'module_contact':
                return <ModuleContact module={module} className={props.className} style={props.style} payload={props.payload}/>;

            case 'module_cardExpand':
                return <ModuleCardExpand module={module} className={props.className} style={props.style} payload={props.payload}/>;

            case 'module_logos':
                return <ModuleLogos module={module} className={props.className} style={props.style} payload={props.payload}/>;

            case 'module_text':
                return <ModuleText module={module} className={props.className} style={props.style} payload={props.payload}/>;

            case 'module_blog_teaser':
                return <ModuleBlogTeaser module={module} className={props.className} style={props.style} payload={props.payload}/>;

            case 'module_case_teaser':
                return <ModuleCaseTeaser module={module} className={props.className} style={props.style} payload={props.payload}/>;

            case 'component_box':
                return <ComponentBox module={module} className={props.className} style={props.style} payload={props.payload}/>;

            case 'component_text':
                return <ComponentText module={module} className={props.className} style={props.style} payload={props.payload}/>;

            default:
                return <div>Module missing: {`"${module.component}"`}</div>;
        }
    } else {
        return null;
    }
};

ModuleWrapper.defaultProps = {
    module: {},
    className: '',
    style: {},
    payload: {},
};

export default ModuleWrapper;
