import {INCREMENT,DECREMENT} from './constant'


export function incrementAction(data) {
    return {
        type:INCREMENT,
        data
    }
}

export function decrementAction(data) {
    return {
        type:DECREMENT,
        data
    }
}