import {combineReducers} from './reduxCode/index'
import {ADD_TODO, SET_VISIBILITY_FILTER} from './actions'

function todos(state = 1, action) {
    switch (action.type) {
        case ADD_TODO:
            return Number(state) + Number(action.text);
        default:
            return state
    }
}

function visibilityFilter(state = 2, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state
    }
}

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

export default todoApp
