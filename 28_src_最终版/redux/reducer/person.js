import {ADD_PERSON} from "../constant";

const initState = [{id:101,name:'张三',age:101},{id:102,name:'王武',age:102}]
export function personReducer(preState=initState,action){
    const {type,data} = action
    switch (type){
        case ADD_PERSON:
            return [data,...preState]
        default:
            return preState
    }
}