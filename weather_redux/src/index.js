import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import App from './components/App'
import reducers from './reducers'
import { watchcitycall } from './sagas/cityweather'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, {},
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()))

sagaMiddleware.run(watchcitycall)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);
