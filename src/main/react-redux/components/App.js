import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const ReactReduxComponent = () => (
  <div style={{margin: '10px'}}>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default ReactReduxComponent
