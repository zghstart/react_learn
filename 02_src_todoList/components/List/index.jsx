import React, { Component } from 'react'
import Item from "../Item";
import './index.css'
export default class List extends Component {
  render() {
      const {todos,checkTodo,handleDelete} = this.props
    return (
        <ul className="todo-main">
            {todos.map(item => {
                return <Item key={item.id} {...item} checkTodo={checkTodo} handleDelete={handleDelete}/>
            })}
        </ul>
    )
  }
}
