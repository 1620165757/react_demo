import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import {Main} from "./main/main";
import {ReactCatch} from "./main/reactCatch/reactCatch";
import {Hooks} from "./main/hooks/hooks";
import ReactReduxMain from "./main/react-redux/react-redux";
import ReduxMain from "./main/redux";
import {UseStatePage} from "./main/hooks/childPage/useStatePage";

const App = (data) => {
    return (
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/hooks' component={Hooks}/>
            <Route path='/reactCatch' component={ReactCatch}/>
            <Route path='/react-redux' component={ReactReduxMain}/>
            <Route path='/redux' component={ReduxMain}/>
        </Switch>
    )
};

export default App
