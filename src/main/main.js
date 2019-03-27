import React, {Component} from 'react'
import {List} from "antd-mobile";
import './main.less'

const data = ['hooks','1'];

export class Main extends Component {

    render() {
        return (
            <List>
                {data.map((item, idx) => (
                    <List.Item key={idx} style={{fontSize: 20}} multipleLine onClick={() => {
                    }} platform="android">
                        <span className='list-item'>{item}</span>
                    </List.Item>
                ))}

            </List>
        )
    }

}
