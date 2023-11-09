export default function countReducer(preState=10,action){
    const {type,data} = action
    console.log(preState)
    switch (type) {
        case 'increase':
            return preState+data
        case 'decrease':
            return preState-data
        default:
            return preState

    } 
}