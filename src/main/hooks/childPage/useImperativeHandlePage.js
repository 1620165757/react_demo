import React, {useRef, useEffect, useImperativeHandle, forwardRef} from "react";
import {withRouter} from "react-router-dom";

function ChildInputComponent(props, ref) {
    const inputRef = useRef(null);
    useImperativeHandle(ref, () => inputRef.current);
    return <input type="text" name="child input" ref={inputRef}/>;
}

const ChildInput = forwardRef(ChildInputComponent);

function _UseImperativeHandlePage() {
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    return (
        <div><ChildInput ref={inputRef}/></div>
    );
}

export const UseImperativeHandlePage = withRouter(_UseImperativeHandlePage);
