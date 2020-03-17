import React, {useState, useRef} from "react";
import {withRouter} from "react-router-dom";

const _UseRefPage = () => {
    let [name, setName] = useState("Nate");
    let nameRef = useRef();
    const submitButton = () => {
        setName(nameRef.current.value);
    };
    return (
        <div className="App"><p>{name}</p>
            <div><input ref={nameRef} type="text"/>
                <button type="button" onClick={submitButton}>
                    Submit
                </button>
            </div>
        </div>
    );
};

export const UseRefPage = withRouter(_UseRefPage);
