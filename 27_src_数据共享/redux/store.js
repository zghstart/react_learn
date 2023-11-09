/*
* 该文件是整个redux中最核心的store对象
* */

import {configureStore, applyMiddleware, combineReducers} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import countReducer from './reducer/count'
import {personReducer} from "./reducer/person";

const allReducers = combineReducers({
    cnt:countReducer,
    person:personReducer
})
export default configureStore({
    reducer: allReducers,
    middleware: (gDM) => gDM().concat(thunk)
})