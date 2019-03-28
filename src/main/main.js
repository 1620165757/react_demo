import React, {Component} from 'react'
import {List} from "antd-mobile";
import './main.less'
import {Link} from "react-router-dom";

const data = ['hooks'];

export class Main extends Component {

    routeCheck = (param) => {
        console.log(param);
        return {
            pathname:'/hooks_'
        }
    };

    render() {
        return (
            <List>
                {data.map((item, idx) => (
                    <List.Item key={idx} style={{fontSize: 20}} multipleLine onClick={() => {
                    }} platform="android">
                        <Link to={() => this.routeCheck(item)}><span className='list-item'>{item}</span></Link>
                    </List.Item>
                ))}
            </List>
        )
    }
}
