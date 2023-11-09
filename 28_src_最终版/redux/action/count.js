import {INCREMENT,DECREMENT} from '../constant'


export function increment(data) {
    return {
        type:INCREMENT,
        data
    }
}

export function decrement(data) {
    return {
        type:DECREMENT,
        data
    }
}


/*
异步action，其实没什么必要
 */
export const incrementAsync = (data) =>{
    return (dispatch) => {
        setTimeout(()=> dispatch(increment(data)), 500)

    }
}