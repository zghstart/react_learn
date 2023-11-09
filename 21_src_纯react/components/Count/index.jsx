import React, {Component} from 'react';

class Count extends Component {

    state={
        count:0,
    }
    render() {
        return (
            <div>
                <h2>当前求和为：{this.state.count}</h2>
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
        // console.log(this.checkNum);
        const {count} = this.state
        const {value} = this.checkNum
        // console.log(value)
        this.setState({count: count + value*1})
    }
    decreaseNum=() =>{
        // console.log(this.checkNum);
        const {count} = this.state
        const {value} = this.checkNum
        // console.log(value)
        this.setState({count: count - value*1})
    }
    increaseNumIfOdd=() =>{
        // console.log(this.checkNum);
        const {count} = this.state
        const {value} = this.checkNum
        // console.log(value)
        if (count%2!==0) {
            this.setState({count: count + value*1})
        }
    }
    increaseNumAsync=() =>{
        // console.log(this.checkNum);
        const {count} = this.state
        const {value} = this.checkNum
        // console.log(value)
        setTimeout(()=>this.setState({count: count + value*1}),500)
       
    }
}

export default Count;