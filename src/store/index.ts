import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./rootReducer";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const createStoreFn = () =>
  createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));
const store = createStoreFn();

sagaMiddleware.run(rootSaga);

export default store;
