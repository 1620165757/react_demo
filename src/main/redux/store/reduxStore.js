import {createStore, applyMiddleware, combineReducers} from "redux";
import {reduxReducer} from "../reducer/reduxReducer";
import createSagaMiddleware from 'redux-saga'
import {sagas} from "../sagas/sagas";
import {aaa} from "../reducer/aaa";

const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({
    reduxReducer: reduxReducer,
    aaa: aaa,
});
export const reduxStore = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);
