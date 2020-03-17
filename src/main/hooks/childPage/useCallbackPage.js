import React, {useCallback} from 'react'
import {Button} from "antd-mobile";
import {withRouter} from "react-router-dom";

const _UseCallbackPage = () => {
    const memoizedHandleClick = useCallback(() => {
        console.log('Click happened')
    }, []);
    return (
        <Button onClick={memoizedHandleClick}>
            123
        </Button>
    )
};
export const UseCallbackPage = withRouter(_UseCallbackPage);
