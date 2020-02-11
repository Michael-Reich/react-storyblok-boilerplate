import React from 'react';
import {Helmet} from 'react-helmet';

import {title} from '../../tools/strings';
import SpecialPage from '../../components/common/SpecialPage';
import HeadSpace from '../../components/common/HeadSpace';

const Error404 = () => {
    return <div>
        <Helmet>
            <title>404 | {title}</title>
            <meta name="robots" content="noindex"/>
        </Helmet>
        <HeadSpace h={150}/>
        <SpecialPage
            className={'text-center'}
            caption={'404 - Not found'}
            text={'Leider konnten wir nichts finden.'}
        />
        <HeadSpace h={150}/>
    </div>;
};

export default Error404;
