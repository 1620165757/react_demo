import React from "react";
import '../redux.less'
import {connect} from 'react-redux'
import {changeBackgroundColor, getColorData} from "../action/reduxAction";

class ChildrenOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colorData: props.colorData,
            backgroundColor: props.backgroundColor
        }
    };

    componentDidMount() {
        this.props.dispatch(getColorData());
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            colorData: nextProps.colorData,
            backgroundColor: nextProps.backgroundColor
        })
    }

    changeBackgroundColor = (param) => {
        this.props.dispatch(changeBackgroundColor(param))
    };

    render() {
        const {colorData, backgroundColor} = this.state;
        return (
            <div>
                <div className='co-back' style={{backgroundColor: backgroundColor}}/>
                <div className='co-list-wrap'>
                    {colorData.map((item, idx) => (
                        <div className='co-list-item' key={idx} onClick={() => this.changeBackgroundColor(item.value)}
                             style={{backgroundColor: item.value}}>{item.key}</div>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
};

// const mapDispatchToProps = dispatch => {
//     return {
//         onTodoClick: id => {
//             dispatch(toggleTodo(id))
//         }
//     }
// }

export default connect(
    mapStateToProps,
)(ChildrenOne)
