import React from 'react';
import {Helmet} from 'react-helmet';

import DetailPagesContainer from './DetailPagesContainer';

const SimpleDetailPagesHub = (props) => {

    return <div>
        <Helmet>
            <meta name="robots" content="noindex"/>
        </Helmet>
        <DetailPagesContainer slug={props.slug} title={props.slug}/>
    </div>
};

SimpleDetailPagesHub.defaultProps = {
    slug: '',
};

export default SimpleDetailPagesHub;
