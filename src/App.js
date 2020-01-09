import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import {Main} from "./main/main";
import {ReactCatch} from "./main/reactCatch/reactCatch";
import {Hooks} from "./main/hooks/hooks";
import ReactReduxMain from "./main/react-redux/react-redux";
import ReduxMain from "./main/redux";

const App = (data) => {
    return(
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route exact path='/hooks' component={Hooks}/>
            <Route exact path='/reactCatch' component={ReactCatch}/>
            <Route exact path='/react-redux' component={ReactReduxMain}/>
            <Route exact path='/redux' component={ReduxMain}/>
        </Switch>
    )
};

export default App
