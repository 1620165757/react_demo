import {withRouter} from "react-router-dom";
import React from 'react'
import {NavigationBar} from "../component/navigationBar";
import {Provider} from "react-redux";
import ChildrenOne from "./components/childrenOne";
import {reduxStore} from "./store/reduxStore";
class ReduxComponent extends React.Component{

    render(){
        return(
            <div>
                <NavigationBar title='redux'/>
                <Provider store={reduxStore}>
                    <ChildrenOne/>
                </Provider>
            </div>
        )
    }
}

export const Redux = withRouter(ReduxComponent);
