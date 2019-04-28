import React from 'react';
import './App.css';
import {Route,Switch} from "react-router-dom";
import {Main} from "./main/main";

import {ReactCatch} from "./main/reactCatch/reactCatch";
import {Hooks} from "./main/hooks/hooks";
import {Redux} from "./main/redux/redux";

export const App = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route exact path='/hooks' component={Hooks}/>
            <Route exact path='/reactCatch' component={ReactCatch}/>
            <Route exact path='/redux' component={Redux}/>
        </Switch>
    </main>
);
