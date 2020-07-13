import React, {useCallback, useRef, useState,useEffect} from 'react'
import {Button} from "antd-mobile";
import {withRouter} from "react-router-dom";
import {node} from "prop-types";

function Child({ callback }) {
    const [count, setCount] = useState(() => callback());
    useEffect(() => {
        setCount(callback());
    }, [callback]);
    return <div>
        {count}
    </div>
}
const _UseCallbackPage = () => {
    const [count, setCount] = useState(1);
    const [val, setVal] = useState('');

    const callback = useCallback(() => {
        return count;
    }, [count]);
    return <div>
        <h4>{count}</h4>
        <Child callback={callback}/>
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <input value={val} onChange={event => setVal(event.target.value)}/>
        </div>
    </div>;
};
export const UseCallbackPage = withRouter(_UseCallbackPage);
