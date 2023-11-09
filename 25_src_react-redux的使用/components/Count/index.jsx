import React, {Component} from 'react';


class Count extends Component {

    state = {
        name: '张三',
    }

    render() {

        return (
            <div>
                <h2>当前求和为：{this.props.he}</h2>
                <select ref={c => this.checkNum = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increaseNum}>+</button>
                &nbsp;
                <button onClick={this.decreaseNum}>-</button>
                &nbsp;
                <button onClick={this.increaseNumIfOdd}>奇数+</button>
                &nbsp;
                <button onClick={this.increaseNumAsync}>异步+</button>
                &nbsp;
            </div>
        );
    }

    increaseNum = () => {

        const {value} = this.checkNum
        this.props.increment(value * 1)
    }
    decreaseNum = () => {
        const {value} = this.checkNum
        this.props.decrement(value * 1)
    }
    increaseNumIfOdd = () => {
        const {value} = this.checkNum
        if (this.props.he % 2 !== 0) {
            this.props.increment(value * 1)
        }
    }
    increaseNumAsync = () => {


        const {value} = this.checkNum
        this.props.incrementAsync(value * 1)
    }
}

export default Count;