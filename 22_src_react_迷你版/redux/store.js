/*
* 该文件是整个redux中最核心的store对象
* */

import {configureStore} from '@reduxjs/toolkit'

import countReducer from './reducer'

export default configureStore({
    reducer: countReducer
})