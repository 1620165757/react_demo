import React, {Component} from 'react'
import {List, Toast} from "antd-mobile";
import './main.less'
import {withRouter} from "react-router-dom";
import {NavigationBar} from "./component/navigationBar";

const data = ['hooks', 'redux.js', 'next.js', '浏览器缓存', 'react错误处理'];

class MainComponent extends Component {

    linkTo = (param) => {
        if (param === 'hooks') {
            this.props.history.push('/hooks')
        } else if (param === 'react错误处理') {
            this.props.history.push('/reactCatch');
        } else if (param === 'redux.js') {
            this.props.history.push('/redux')
        } else {
            Toast.info('暂无内容');
        }
    };

    render() {
        return (
            <div>
                <NavigationBar title='主页' showLeft={false}/>
                <div className='list-wrap'>
                    {data.map((item, idx) => (
                        <div className='list-item' key={idx}>
                            <List.Item style={{fontSize: 20}} multipleLine onClick={() => this.linkTo(item)}
                                       platform="android">
                                <span className='list-item-span'>{item}</span>
                            </List.Item>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export const Main = withRouter(MainComponent);
