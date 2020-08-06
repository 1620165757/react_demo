import * as React from 'react'
import {NavigationBar} from "../component/navigationBar";
import {createStore,applyMiddleware} from "./reduxCode/index";
import rootReducer from './reducers'
import {addTodo} from "./actions";
import {Button} from "antd-mobile";
import createSagaMiddleware from 'redux-saga'
import reduxSaga from "../saga/saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(reduxSaga);

class ReduxMain extends React.Component<any> {

    addTodo = ()=>{
        store.dispatch(addTodo(1));
    };

    render() {
      return (
            <div>
                <NavigationBar/>
                <Button onClick={this.addTodo}>
                    click me
                </Button>
            </div>
        )
    }
}

export default ReduxMain
