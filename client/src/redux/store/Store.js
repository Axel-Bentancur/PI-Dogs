import { createStore, applyMiddleware, compose } from "redux"; //funciones puras
import combineReducers from "../reducer/Reducers";
import thunk from "redux-thunk"; //asincronismo

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers,
  compose(composeEnhancers(applyMiddleware(thunk)))
);
