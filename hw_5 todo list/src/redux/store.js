import { createStore, compose } from "redux";
import MainReducer from '../reducers/MainReducer'

const composeEnhancers = process.env.NODE_ENV !=='production' && typeof window !=='undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  ?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const store = createStore( MainReducer, composeEnhancers() );

export default store;
