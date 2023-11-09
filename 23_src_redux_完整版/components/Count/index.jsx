import React, {Component} from 'react';
import store from "../../redux/store";
import {decrementAction, incrementAction} from "../../redux/action";

class Count extends Component {

    state={
        name:'张三',
    }
    render() {
        console.log(store)
        return (
            <div>
                <h2>当前求和为：{store.getState()}</h2>
                <select ref={c=> this.checkNum=c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increaseNum}>+</button>&nbsp;
                <button onClick={this.decreaseNum}>-</button>&nbsp;
                <button onClick={this.increaseNumIfOdd}>奇数+</button>&nbsp;
                <button onClick={this.increaseNumAsync}>异步+</button>&nbsp;
            </div>
        );
    }

    increaseNum=() =>{

        const {value} = this.checkNum
        store.dispatch(incrementAction(value*1))
    }
    decreaseNum=() =>{
        const {value} = this.checkNum
        store.dispatch(decrementAction(value*1))
    }
    increaseNumIfOdd=() =>{


        if (store.getState()%2!==0) {
            const {value} = this.checkNum
            store.dispatch(incrementAction(value*1))
        }
    }
    increaseNumAsync=() =>{


        const {value} = this.checkNum

        setTimeout(()=>{
            store.dispatch(decrementAction(value*1))
        },500)

    }
}

export default Count;