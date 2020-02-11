import React from 'react';
import {hydrate, render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import {PersistGate} from 'redux-persist/integration/react';
import TagManager from 'react-gtm-module';

import './index.scss';

import {store, persistor} from './store';
import * as serviceWorker from './serviceWorker';
import Routing from './routing';
import TopNavBar from './components/common/TopNavBar';
import Footer from './components/common/Footer';
import TopNavBarBig from './components/common/TopNavBarBig';

if (navigator.userAgent !== 'ReactSnap' && process.env.NODE_ENV !== 'development') {
    // TagManager.initialize({gtmId: 'GTM-PVV5BS3'});
}

const part = <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <Router>
            <ScrollToTop/>
            <TopNavBarBig/>
            <Routing/>
            <Footer/>
        </Router>
    </PersistGate>
</Provider>;

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
    hydrate(part, rootElement);
} else {
    render(part, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
