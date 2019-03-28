import React from 'react';
import './App.css';
import {Route,Switch} from "react-router-dom";
import {Main} from "./main/main";
import {Hooks} from "./main/hooks/hooks";

export const App = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route exact path='/hooks_' component={Hooks}/>
        </Switch>
    </main>
);
