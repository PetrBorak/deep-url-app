import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import {createReduxLocationActions, listenForHistoryChange } from 'react-redux-url-state';
import { paramSetup, mapLocationToState } from './init.deep.url';
import { reducer } from './store'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export const history = createBrowserHistory();

const { locationMiddleware, reducersWithLocation } = createReduxLocationActions(paramSetup, mapLocationToState, (history as any), combineReducers({
    url: reducer
}));

const middleware = applyMiddleware(locationMiddleware);

export const composeEnhancers = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
export const store = createStore(reducersWithLocation, composeEnhancers(middleware));
listenForHistoryChange(store, (history as any));
