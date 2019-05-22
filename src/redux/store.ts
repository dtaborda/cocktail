import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux';
import reduxLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { initialState, reducers } from './reducer';
import sagas from './sagas';

/* ------------- Redux Configuration ------------- */
const middleware = [];
const enhancers: any = [];

/* ------------- reduxLogger Middleware ------------- */
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

/* ------------- Saga Middleware ------------- */
if (process.env.NODE_ENV === 'development') {
  console.log('process', process);
  middleware.push(reduxLogger);
}

/* ------------- Assemble Middleware ------------- */
enhancers.push(applyMiddleware(...middleware));

const reducersCombined = combineReducers(reducers);

const storeConfig = (initState = initialState) => {
  const store = createStore(
    reducersCombined,
    compose(...enhancers),
  );

  sagaMiddleware.run(sagas);
  return store;
};

export default storeConfig;
