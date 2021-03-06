import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import  rootReducer  from './reducers';
// import { BrowserRouter as Router } from "react-router-dom";


const composeEnhancers =
typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ })
: compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, logger));
const store = createStore(rootReducer, enhancer);




ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
    , document.getElementById('root'));





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
