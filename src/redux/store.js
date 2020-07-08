import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { reducer as form } from 'redux-form';
import thunk from 'redux-thunk';
import { fetchMiddleware } from 'redux-recompose';

import { reducer as auth } from './Auth/reducer';
import { actions as authActions } from './Auth/actions';

export const history = createBrowserHistory();

// Add reducers here
const reducers = combineReducers({
  auth,
  form,
  router: connectRouter(history)
});

const middlewares = [thunk, routerMiddleware(history), fetchMiddleware];
const enhancers = [];

// TODO Add this if you need it.
/* ------------- Analytics Middleware ------------- */
// Middlewares.push(AnalyticsMiddleware);

/* ------------- Assemble Middleware ------------- */
enhancers.push(applyMiddleware(...middlewares));

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = (state, action) => {
  let newState = state;
  if (action.type === authActions.SIGN_OUT) {
    newState = undefined;
  }
  return reducers(newState, action);
};

const store = createStore(rootReducer, composeEnhancers(...enhancers));

export default store;
