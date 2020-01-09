import React from 'react'
import {NavigationBar} from "../component/navigationBar";
import ReactReduxComponent from "./components/App";
// import {Provider} from './reactReduxCore/index'
import {Provider} from './reactReduxCore'
import {createStore} from "./reduxCode/index";
import rootReducer from './reducers'

const store = createStore(rootReducer);
class ReactReduxMain extends React.Component {

    render() {
        return (
            <div>
                <NavigationBar title='redux'/>
                <Provider store={store}>
                    <ReactReduxComponent/>
                </Provider>
            </div>
        )
    }
}

export default ReactReduxMain
