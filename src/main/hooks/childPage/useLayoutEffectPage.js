import React, {useEffect, useState, useLayoutEffect} from "react";
import {withRouter} from "react-router-dom";

const _UseLayoutEffectPage = () => {
    const [width, setWidth] = useState(0);
    useLayoutEffect(() => {
        const title = document.querySelector("#title");
        const titleWidth = title.getBoundingClientRect().width;
        console.log("useLayoutEffect");
        if (width !== titleWidth) {
            setWidth(titleWidth);
        }
    });
    useEffect(() => {
        console.log("useEffect");
    });
    return (
        <div><h1 id="title">hello</h1><h2>{width}</h2></div>
    );
};

export const UseLayoutEffectPage = withRouter(_UseLayoutEffectPage);
