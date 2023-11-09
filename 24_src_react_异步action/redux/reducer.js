import {INCREMENT,DECREMENT} from './constant'

export default function countReducer(preState=10,action){
    const {type,data} = action
    console.log(preState)
    switch (type) {
        case INCREMENT:
            return preState+data
        case DECREMENT:
            return preState-data
        default:
            return preState

    }
}