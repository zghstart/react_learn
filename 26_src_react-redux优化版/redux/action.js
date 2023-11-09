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


/*
异步action，其实没什么必要
 */
export const incrementAsyncAction = (data) =>{
    return (dispatch) => {
        setTimeout(()=> dispatch(incrementAction(data)), 500)

    }
}