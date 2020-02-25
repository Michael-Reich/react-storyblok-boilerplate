import React from 'react';

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
import ModuleImages from './Modules/ModuleImages';
import ModuleBlogTeaser from './Modules/ModuleBlogTeaser';
import ModuleCaseTeaser from './Modules/ModuleCaseTeaser';

const ModuleWrapper = (props) => {

    if (props.module && props.module.component) {
        switch (props.module.component) {
            case 'module_intro':
                return <ModuleIntro module={props.module} className={props.className} style={props.style}
                                    payload={props.payload}/>;

            case 'module_imageText':
                return <ModuleImageText module={props.module} className={props.className} style={props.style}
                                        payload={props.payload}/>;

            case 'module_boxes':
                return <ModuleBoxes module={props.module} className={props.className} style={props.style}
                                    payload={props.payload}/>;

            case 'module_images':
                return <ModuleImages module={props.module} className={props.className} style={props.style}
                                     payload={props.payload}/>;

            case 'module_projectTeaser':
                return <ModuleProjectTeaser module={props.module} className={props.className} style={props.style}
                                            payload={props.payload}/>;

            case 'module_contact':
                return <ModuleContact module={props.module} className={props.className} style={props.style}
                                      payload={props.payload}/>;

            case 'module_cardExpand':
                return <ModuleCardExpand module={props.module} className={props.className} style={props.style}
                                         payload={props.payload}/>;

            case 'module_logos':
                return <ModuleLogos module={props.module} className={props.className} style={props.style}
                                    payload={props.payload}/>;

            case 'module_text':
                return <ModuleText module={props.module} className={props.className} style={props.style}
                                   payload={props.payload}/>;

            case 'module_blog_teaser':
                return <ModuleBlogTeaser module={props.module} className={props.className} style={props.style}
                                         payload={props.payload}/>;

            case 'module_case_teaser':
                return <ModuleCaseTeaser module={props.module} className={props.className} style={props.style}
                                         payload={props.payload}/>;

            case 'component_box':
                return <ComponentBox module={props.module} className={props.className} style={props.style}
                                     payload={props.payload}/>;

            case 'component_text':
                return <ComponentText module={props.module} className={props.className} style={props.style}
                                      payload={props.payload}/>;

            default:
                return <div>Module missing: {`"${props.module.component}"`}</div>;
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
