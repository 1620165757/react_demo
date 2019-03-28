import {Icon, NavBar} from "antd-mobile";
import React from "react";
import {withRouter} from "react-router-dom";

const NavigationBarComponent = ({title = 'bar', showLeft = true, ...param}) => {

    const leftClick = () => {
        param.history.goBack();
    };

    return (
        <NavBar
            mode="light"
            icon={showLeft ? <Icon type='left'/> : null}
            onLeftClick={showLeft ? leftClick : null}
            rightContent={[
                <Icon key="0" type="search" style={{marginRight: '16px'}}/>,
                <Icon key="1" type="ellipsis"/>,
            ]}
        >{title}</NavBar>
    )
};
export const NavigationBar = withRouter(NavigationBarComponent);
