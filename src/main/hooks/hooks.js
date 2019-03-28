import React from "react";
import {withRouter} from "react-router-dom";
import {NavigationBar} from "../component/navigationBar";

const HooksComponent = () => (
    <div>
        <NavigationBar title='hooks'/>
    </div>
);
export const Hooks = withRouter(HooksComponent);
