import { createSlice } from '@reduxjs/toolkit'

export const paginRedux = createSlice({
    name: 'pagin',
    initialState: {
        currentData: [],
        currentPage: 1,
        requestSize: 50,
        usersOnPage: 20,
        pageNumberArray: [],
        lastPage: '',
    },
    reducers: {
        putCurrentData: (state,actions) => {state.currentData = actions.payload},
        getCurrentPage: (state,actions) => {state.currentPage = actions.payload},
        setRequestSize:(state,actions) => {state.requestSize = actions.payload},
        getPageNumberArray:(state,actions) => {state.pageNumberArray = actions.payload},
        setLastPage:(state,actions) => {state.lastPage = actions.payload},
    }
})

export const { putCurrentData,getCurrentPage ,setRequestSize,getPageNumberArray,setLastPage } = paginRedux.actions

export default paginRedux.reducer
