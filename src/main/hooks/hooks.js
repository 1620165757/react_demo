import React, {useState} from "react";
import {withRouter} from "react-router-dom";
import {NavigationBar} from "../component/navigationBar";
import {Stepper} from "antd-mobile";
import './hooks.less'

const HooksComponent = () => {
    let [count, setCount] = useState(0);
    const onChange = (val) => {
        setCount(val)
    };
    return (
        <div>
            <NavigationBar title='hooks'/>
            {/*计数器*/}
            <div className='hs-use-state-wrap'>
                <span className='hs-use-state'>useState</span>
                <div>
                    <Stepper className='hs-stepper' showNumber value={count} onChange={onChange}/>
                </div>
            </div>
        </div>
    )
};
export const Hooks = withRouter(HooksComponent);
