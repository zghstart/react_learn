/*
* 准备一个容器组件，该组件主要负责：和redux进行数据的交互，可以随意的使用redux的API，和UI组件是父子关系
* */
// 引入connect用于连接UI与redux，且connect()()可以生成容器组件
import {connect} from 'react-redux'
// 引入UI组件
// import CountUI from "../../components/Count";
import {decrementAction, incrementAction,incrementAsyncAction} from "../../redux/action";
import React, {Component} from "react";


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
function mapStateToProps(state){
    // console.log('mapStateToProps',state)
    return {he:state};
}

function mapDispatcherToProps(dispatch){
    // console.log('mapDispatcherToProps',dispatch)
    return {
        increment:number =>dispatch(incrementAction(number)),
        decrement:number =>dispatch(decrementAction(number)),
        incrementAsync:number=>dispatch(incrementAsyncAction(number)),
    };
}

// const CountContainer = connect(mapStateToProps,mapDispatcherToProps)(Count)
//
// export default CountContainer

// 优化版本
export default connect(
    state=>({he:state}),
    {
        increment:incrementAction,
        decrement:decrementAction,
        incrementAsync:incrementAsyncAction
    }
    )(Count)
