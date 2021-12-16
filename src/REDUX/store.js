import { configureStore } from '@reduxjs/toolkit'
import reduxSlice  from './reduxSlice'
import dialectSlice from './dialectSlice'
import paginRedux from './paginRedux'

export default configureStore({

    reducer: {
        redux: reduxSlice,
        dialect: dialectSlice,
        pagin: paginRedux,
    } 
})
