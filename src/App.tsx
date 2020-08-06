import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import {Main} from "./main/main";
import {ReactCatch} from "./main/reactCatch/reactCatch";
import {Hooks} from "./main/hooks/hooks";
import ReactReduxMain from "./main/react-redux/react-redux";
import ReduxMain from "./main/redux";
import {Http} from "./main/http/http";

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Main}/>
      <Route path='/hooks' component={Hooks}/>
      <Route path='/reactCatch' component={ReactCatch}/>
      <Route path='/react-redux' component={ReactReduxMain}/>
      <Route path='/redux' component={ReduxMain}/>
      <Route path='/http' component={Http}/>
    </Switch>
  )
};

export default App
