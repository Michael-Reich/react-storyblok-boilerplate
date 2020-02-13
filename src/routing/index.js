import React from 'react';
import {withRouter, Switch, Route} from 'react-router-dom';

import Blog from '../scenes/Blog';
import BlogDetail from '../scenes/Blog/Detail';
import Cases from '../scenes/Cases';
import CaseDetail from '../scenes/Cases/Detail';
import Error404 from '../scenes/SpecialPages/Error404';
import SimplePage from '../components/common/SimplePage';
import SimpleDetailPage from '../components/common/SimpleDetailPage';
import SimpleDetailPagesHub from '../components/common/SimpleDetailPagesHub';

const Routing = (props) => {

    console.log("process",process);
    return <Switch>
        <Route path="/blog/:slug" component={BlogDetail}/>
        <Route path="/blog" component={Blog}/>
        <Route path="/cases/:slug" component={CaseDetail}/>
        <Route path="/cases" component={Cases}/>

        {navigator.userAgent === 'ReactSnap' && <Route path="/gebiete" exact component={() => <SimpleDetailPagesHub slug={'gebiete'}/>}/>}
        <Route path="/gebiete/:slug" component={(props) => <SimpleDetailPage parentSlug={'gebiete'} props={props}/>}/>

        <Route path="/phasen/:slug" component={(props) => <SimpleDetailPage parentSlug={'phasen'} props={props}/>}/>
        <Route path="/themen/:slug" component={(props) => <SimpleDetailPage parentSlug={'themen'} props={props}/>}/>
        <Route path="/leistungen/:slug" component={(props) => <SimpleDetailPage parentSlug={'leistungen'} props={props}/>}/>
        <Route path="/impressum" exact component={()=><SimplePage slug={'impressum'}/>}/>
        <Route path="/datenschutz" exact component={()=><SimplePage slug={'datenschutz'}/>}/>
        <Route path="/kontakt" exact component={()=><SimplePage slug={'kontakt'}/>}/>
        <Route path="/" exact component={() => <SimplePage slug={'home'}/>}/>
        <Route component={Error404}/>
    </Switch>;
};

export default withRouter(Routing);
