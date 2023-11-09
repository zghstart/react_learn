/*
* 该文件是整个redux中最核心的store对象
* */

import {configureStore,applyMiddleware} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import countReducer from './reducer'

export default configureStore({
    reducer: countReducer,
    middleware: (gDM) => gDM().concat(thunk)
})