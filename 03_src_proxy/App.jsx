import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
export default class App extends Component {
    getStuData = ()=>{
        axios.get('http://localhost:6000/api1/students').then(
            response=>{console.log('成功了',response.data)},
            error=>{console.log('失败了',error)},
        )
    };

  render() {
    return (
        <div className="todo-container">
          <button onClick={this.getStuData}>点我获取学生数据</button>
        </div>
    )
  }
}
