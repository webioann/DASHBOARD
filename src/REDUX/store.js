import { configureStore } from '@reduxjs/toolkit'
import reduxSlice  from './reduxSlice'
import dialectSlice from './dialectSlice'
import paginSlice from './paginSlice'

export default configureStore({

    reducer: {
        redux: reduxSlice,
        dialect: dialectSlice,
        pagin: paginSlice,
    } 
})
