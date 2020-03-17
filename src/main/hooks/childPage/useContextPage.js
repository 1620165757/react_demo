import React, {useContext} from 'react'
import {withRouter} from "react-router-dom";

const colorContext = React.createContext("gray");

const _UseContextPage = () => {


    function Bar() {
        const color = useContext(colorContext);
        return <div>{color}</div>;
    }

    function Foo() {
        return <Bar/>;
    }
    console.log('colorContext',colorContext);
    return (
        <colorContext.Provider value={"red"}><Foo/></colorContext.Provider>
    );

};

export const UseContextPage = withRouter(_UseContextPage);
