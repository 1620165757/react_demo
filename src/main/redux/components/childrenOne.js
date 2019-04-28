import React from "react";
import '../redux.less'
import {connect} from 'react-redux'

const ChildrenOne = (props) => {

    const list = [{key:'白色',value:'#fff'}, {key:'红色',value:'#ff4b48'}, {key:'蓝色',value:'#7c90ee'}, {key:'绿色',value:'#92dd8c'}];
    console.log('props',props);
    const backgroundColor = props.backgroundColor;
    return (
        <div>
            <div className='co-back' style={{backgroundColor:backgroundColor}}/>
            <div className='co-list-wrap'>
                {list.map((item, idx) => (
                    <div className='co-list-item' key={idx} style={{backgroundColor:item.value}}>{item.key}</div>
                ))}
            </div>
        </div>
    )
};

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
