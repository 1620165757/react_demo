import React, {useState} from "react";
import {withRouter} from "react-router-dom";

const _UseStatePage = () => {
    const [obj, setObject] = useState({
        count: 0,
    });
    return (
        <div className="App">
            Count: {obj.count}
            <button onClick={() => setObject({...obj, count: obj.count + 1})}>+</button>
            <button onClick={() => setObject({...obj, count: obj.count - 1})}>-</button>
        </div>
    );
};

export const UseStatePage = withRouter(_UseStatePage);
