import React, {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import {colors} from '../../tools/styles';
import {title} from '../../tools/strings';

const CustomHelmet = (props) => {
    const [metaFields, setMetaFields] = useState({});
    const [page, setPage] = useState({});

    useEffect(() => {
        setMetaFields(props.metaFields);
    }, [props.metaFields]);

    useEffect(() => {
        setPage(props.page);
    }, [props.page]);

    return <div>
        <Helmet>
            <meta name="theme-color" content={`${colors.highlight}`}/>
            <title>{`${metaFields.title || page.name} | ${title}`}</title>
            {metaFields.title && <meta name="title" content={`${metaFields.title || page.name}`}/>}
            {metaFields.title && <meta property="og:title" content={`${metaFields.title || page.name}`}/>}
            {metaFields.description && <meta name="description" content={`${metaFields.description}`}/>}
            {metaFields.description && <meta property="og:description" content={metaFields.description}/>}
        </Helmet>
    </div>;
};

CustomHelmet.defaultProps = {
    metaFields: {},
    page: {},
};

export default CustomHelmet;
