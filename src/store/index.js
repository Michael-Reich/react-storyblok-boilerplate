
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import promise from 'redux-promise';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import createSagaMiddleware from 'redux-saga'

import rootSaga from '../sagas'
import rootReducer from '../reducers';

const persistConfig = {
    key: 'react-storyblok_boilerplate_root',
    storage,
    blacklist: [], // will not be persisted
};


const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [promise, sagaMiddleware];

export const store = createStore(persistedReducer, composeWithDevTools(
    applyMiddleware(...middleware),
    // other store enhancers if any
));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
