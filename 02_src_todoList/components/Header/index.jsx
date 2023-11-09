import React, {Component} from 'react'
import './index.css'
import {nanoid} from "nanoid";

export default class Header extends Component {
    handleKeyUp = (event)=>{
        const {keyCode,target} = event;
        console.log(keyCode,target)
        if (keyCode!==13) return
        const {value:name} = target
        const todoObj = {id:nanoid(),name,done:false}
        console.log(todoObj)
        this.props.addTodo(todoObj);
        //清空用户输入
        target.value=''
    };
    render() {
        return (
            <div className="todo-header">
                <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}
