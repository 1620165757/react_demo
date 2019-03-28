import React, {Component} from 'react'
import {List} from "antd-mobile";
import './main.less'
import {withRouter} from "react-router-dom";
import {NavigationBar} from "./component/navigationBar";

const data = ['hooks', 'redux.js', 'next.js'];

class MainComponent extends Component {

    linkTo = (param) => {
        if (param === 'hooks') {
            this.props.history.push('/hooks_')
        }
    };

    render() {
        return (
            <div>
                <NavigationBar title='主页' showLeft={false}/>
                <List>
                    {data.map((item, idx) => (
                        <List.Item key={idx} style={{fontSize: 20}} multipleLine onClick={() => {
                        }} platform="android">
                            <span className='list-item' onClick={() => this.linkTo(item)}>{item}</span>
                        </List.Item>
                    ))}
                </List>
            </div>
        )
    }
}

export const Main = withRouter(MainComponent);
