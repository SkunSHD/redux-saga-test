import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { mySaga } from './sagas/sagas'

import './index.css';
import reducer from './reducers'
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';


const sagaMiddleware = createSagaMiddleware()
const middleware = [ sagaMiddleware ]

if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

sagaMiddleware.run(mySaga)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();

// https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html
