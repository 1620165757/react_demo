import React from 'react'
import {NavigationBar} from "../component/navigationBar";
import {createStore} from "./reduxCode/index";
import rootReducer from './reducers'
import {addTodo} from "./actions";
import {Button} from "antd-mobile";

const store = createStore(rootReducer);

class ReduxMain extends React.Component {

    addTodo = ()=>{
        store.dispatch(addTodo(111));
    };

    render() {
        return (
            <div>
                <NavigationBar title='redux'/>
                <Button onClick={this.addTodo}>
                    click me
                </Button>
            </div>
        )
    }
}

export default ReduxMain
