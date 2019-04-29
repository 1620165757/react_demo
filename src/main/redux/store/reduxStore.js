import {createStore, applyMiddleware} from "redux";
import {reduxReducer} from "../reducer/reduxReducer";
import createSagaMiddleware from 'redux-saga'
import {sagas} from "../sagas/sagas";

const sagaMiddleware = createSagaMiddleware();
export const reduxStore = createStore(reduxReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);
