import { configureStore } from '@reduxjs/toolkit'
import reduxSlice  from './reduxSlice'
import dialectSlice from './dialectSlice'
import filterSlice from './filterSlice'

export default configureStore({

    reducer: {
        redux: reduxSlice,
        dialect: dialectSlice,
        filter: filterSlice,
    } 
});
