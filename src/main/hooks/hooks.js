import React, {useState, useEffect} from "react";
import {withRouter} from "react-router-dom";
import {NavigationBar} from "../component/navigationBar";
import {Stepper} from "antd-mobile";
import './hooks.less'

const HooksComponent = () => {
    let [count, setCount] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);
    const onChange = (val) => {
        setCount(val)
    };
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
    }, [width]);
    let customWidth = useWindowWidth();
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
            <div className='hs-use-state-wrap'>
                <span className='hs-use-state'>useEffect</span>
                <div>width is {width}</div>
            </div>
            <div className='hs-use-state-wrap'>
                <span className='hs-use-state'>CustomHooks</span>
                <div>width is {customWidth}</div>
            </div>
        </div>
    )
};
export const Hooks = withRouter(HooksComponent);

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
    }, [width]);
    return width;
}
