import React from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import {NavigationBar} from "../component/navigationBar";
import {List, Stepper} from "antd-mobile";
import './hooks.less'
import {UseStatePage} from "./childPage/useStatePage";
import {UseEffectPage} from "./childPage/useEffectPage";
import {UseContextPage} from "./childPage/useContextPage";
import {UseReducerPage} from "./childPage/useReducerPage";
import {UseCallbackPage} from "./childPage/useCallbackPage";
import {UseRefPage} from "./childPage/useRefPage";
import {UseImperativeHandlePage} from "./childPage/useImperativeHandlePage";
import {UseLayoutEffectPage} from "./childPage/useLayoutEffectPage";

const data = [
    {key: 'useState 保存组件状态', route: '/hooks/useState'},
    {key: 'useEffect 处理副作用', route: '/hooks/useEffect'},
    {key: 'useContext 减少组件层级', route: '/hooks/useContext'},
    {key: 'useReducer', route: '/hooks/useReducer'},
    {key: 'useCallback 记忆函数', route: '/hooks/useCallback'},
    {key: 'useMemo 记忆组件', route: '/hooks/useMemo'},
    {key: 'useRef 保存引用值', route: '/hooks/useRef'},
    {key: 'useImperativeHandle 透传 Ref', route: '/hooks/useImperativeHandle'},
    {key: 'useLayoutEffect 同步执行副作用', route: '/hooks/useLayoutEffect'},
];

const HooksMain = ({props}) => {
    console.log('props', props);
    return (
        <div>

            <div className='list-wrap'>
                {data.map((item, idx) => (
                    <div className='list-item' key={idx}>
                        <List.Item style={{fontSize: 20}} multipleLine onClick={() => props.history.push(item.route)} platform="android">
                            <span className='list-item-span'>{item.key}</span>
                        </List.Item>
                    </div>
                ))}
            </div>
        </div>
    )
};


const HooksRoute = (props) => {
    return (
        <div>
            <NavigationBar title='hooks' props={props}/>
            <Switch>
                <Route exact path='/hooks' render={() => <HooksMain props={props}/>}/>
                <Route path='/hooks/useState' component={UseStatePage}/>
                <Route path='/hooks/useEffect' component={UseEffectPage}/>
                <Route path='/hooks/useContext' component={UseContextPage}/>
                <Route path='/hooks/useReducer' component={UseReducerPage}/>
                <Route path='/hooks/useCallback' component={UseCallbackPage}/>
                <Route path='/hooks/useMemo' component={UseCallbackPage}/>
                <Route path='/hooks/useRef' component={UseRefPage}/>
                <Route path='/hooks/useImperativeHandle' component={UseImperativeHandlePage}/>
                <Route path='/hooks/useLayoutEffect' component={UseLayoutEffectPage}/>
            </Switch>
        </div>
    )
};

export const Hooks = withRouter(HooksRoute);




