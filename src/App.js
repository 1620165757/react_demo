import React from 'react';
import './App.css';
import {Main} from "./main/main";
import {Route,Switch} from "react-router-dom";
import {Hooks_} from "./main/hooks/hooks_";

export const App = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route exact path='/hooks_' component={Hooks_}/>
        </Switch>
    </main>
);
