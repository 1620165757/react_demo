import React, {useEffect, useState} from 'react'
import {withRouter} from "react-router-dom";

let timer = null;
const _UseEffectPage = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = "componentDidMount" + count;
    }, [count]);

    useEffect(() => {
        timer = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);
        return () => {
            document.title = "componentWillUnmount";
            clearInterval(timer);
        };
    }, []);
    return (
        <div>
            Count: {count}
            <button onClick={() => clearInterval(timer)}>clear</button>
        </div>
    );
};

export const UseEffectPage = withRouter(_UseEffectPage);
