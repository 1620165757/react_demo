import React, {Component} from 'react';
import './App.css';
import {List} from "antd-mobile";

class App extends Component {
    render() {
        return (
            <div className="App">
                <List>
                    <List.Item style={{fontSize:20}} multipleLine onClick={() => {}} platform="android">
                        <span style={}>hooks</span>
                    </List.Item>
                </List>
            </div>
        );
    }
}

export default App;
