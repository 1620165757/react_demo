import React, {Component} from 'react'
import {List, Toast} from "antd-mobile";
import './main.less'
import {withRouter} from "react-router-dom";
import {NavigationBar} from "./component/navigationBar";
import {connect} from 'react-redux'

const data = ['hooks', 'react-redux.js', 'redux.js', 'next.js', '浏览器缓存', 'react错误处理', 'useState'];

class MainComponent extends Component {

    linkTo = (param) => {
        if (param === 'hooks') {
            this.props.history.push('/hooks')
        } else if (param === 'react错误处理') {
            this.props.history.push('/reactCatch');
        } else if (param === 'react-redux.js') {
            this.props.history.push('/react-redux')
        } else if (param === 'redux.js') {
            this.props.history.push('/redux')
        } else if (param === 'useState') {
            this.props.history.push('/hooks/useState')
        } else {
            Toast.info('暂无内容');
        }
    };

    render() {
        console.log(this.props, '1111');
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
                    <div className='suspension'>点我1</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
};

export const Main = MainComponent;
