import React, { Component } from 'react'
import './App.css'
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
export default class App extends Component {

    state = {
        todoArr : [
            {id:101,name:"吃饭",done:true},
            {id:102,name:"睡觉",done:true},
            {id:103  ,name:"打牌",done:false},
        ]
    }

    addTdo=(todoObj)=>{
       const {todoArr} = this.state
       this.setState({todoArr :[todoObj, ...todoArr]})
    }

    // 勾选todo

    checkTodo = (id,done)=>{
        // console.log(id,done)
        const {todoArr} = this.state;
        const newTodos = todoArr.map(t=>{
            if (t.id===id) return {...t,done}
            else return t;
        });
        this.setState({todoArr: newTodos})
    }

    handleDelete=(id)=> {
        const {todoArr} = this.state
        const todos = todoArr.filter(t=>{return t.id!==id})
        this.setState({todoArr: todos})
    }

    /**
     * 全选或者取消全选
     * @param done 是否选择
     */
    handleCheckAll=(done)=> {
        const {todoArr} = this.state
        const todos = todoArr.map(t=> {
            return {...t, done}
        })
        this.setState({todoArr: todos})
    }

    clear=()=> {
        const {todoArr} = this.state
        const todos = todoArr.filter(t=> {
            return !t.done
        })
        this.setState({todoArr: todos})
    }
  render() {
    return (
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTdo}/>
            <List todos={this.state.todoArr} checkTodo={this.checkTodo} handleDelete={this.handleDelete}/>
           <Footer todos={this.state.todoArr} handleCheckAll={this.handleCheckAll} clear={this.clear}/>
          </div>
        </div>
    )
  }
}
