import { configureStore } from '@reduxjs/toolkit'
import reduxSlice  from './reduxSlice'
import dialectSlice from './dialectSlice'

export default configureStore({

    reducer: {
        redux: reduxSlice,
        dialect: dialectSlice
    } 
})
