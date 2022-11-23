import React from 'react';
import { render } from 'react-dom';
import App from './app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import SearchReducer from './containers/MovieSearch/SearchReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  movieData: SearchReducer
});

const store = createStore(rootReducer, composeEnhancers(
	applyMiddleware(
		promiseMiddleware()
	)
));

/* Update render method invoke */
render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('root')
);