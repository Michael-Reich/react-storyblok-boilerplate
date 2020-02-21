import React from 'react';
import {Helmet} from 'react-helmet';


import {title} from '../../tools/strings';

const Newsletter = () => {


    return <div>
        <Helmet>
            <title>Newsletter Generator | {title}</title>
        </Helmet>
    </div>;
};

export default Newsletter;
