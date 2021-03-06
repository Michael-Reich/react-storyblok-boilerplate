import React, {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import {colors} from '../../tools/styles';
import {title} from '../../tools/strings';

const CustomHelmet = (props) => {
    const [metaFields, setMetaFields] = useState({});
    const [metaTitle, setMetaTitle] = useState('');

    useEffect(() => {
        setMetaFields(props.metaFields);
        setMetaTitle(props.metaFields.title || props.page.name || '')
    }, [props.metaFields, props.page]);

    return <Helmet>
        <meta name="theme-color" content={`${colors.highlight}`}/>
        <title>{`${metaTitle && `${metaTitle} | `} ${title}`}</title>
        <meta name="title" content={`${metaTitle && `${metaTitle} | `} ${title}`}/>
        <meta property="og:title" content={`${metaTitle && `${metaTitle} | `} ${title}`}/>
        {metaFields.description && <meta name="description" content={`${metaFields.description}`}/>}
        {metaFields.description && <meta property="og:description" content={metaFields.description}/>}
    </Helmet>;
};

CustomHelmet.defaultProps = {
    metaFields: {},
    page: {},
};

export default CustomHelmet;
