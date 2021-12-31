import { configureStore } from '@reduxjs/toolkit'
import reduxSlice  from './reduxSlice'
import dialectSlice from './dialectSlice'
// import dataSlice from './dataSlice'

export default configureStore({

    reducer: {
        redux: reduxSlice,
        dialect: dialectSlice,
    } 
})
