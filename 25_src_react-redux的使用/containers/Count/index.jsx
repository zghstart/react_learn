/*
* 准备一个容器组件，该组件主要负责：和redux进行数据的交互，可以随意的使用redux的API，和UI组件是父子关系
* */
// 引入connect用于连接UI与redux，且connect()()可以生成容器组件
import {connect} from 'react-redux'
// 引入UI组件
import CountUI from "../../components/Count";
import {decrementAction, incrementAction,incrementAsyncAction} from "../../redux/action";

function mapStateToProps(state){
    console.log('mapStateToProps',state)
    return {he:state};
}

function mapDispatcherToProps(dispatch){
    console.log('mapDispatcherToProps',dispatch)
    return {
        increment:number =>dispatch(incrementAction(number)),
        decrement:number =>dispatch(decrementAction(number)),
        incrementAsync:number=>dispatch(incrementAsyncAction(number)),
    };
}

const CountContainer = connect(mapStateToProps,mapDispatcherToProps)(CountUI)

export default CountContainer