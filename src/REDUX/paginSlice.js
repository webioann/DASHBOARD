import { createSlice } from '@reduxjs/toolkit'

export const paginRedux = createSlice({
    name: 'pagin',
    initialState: {
        filteredData: [],
        currentPage: 1,
        requestSize: 50,
        usersOnPage: 20,
    },
    reducers: {
        putFilteredData: (state,actions) => {state.filteredData = actions.payload},
        getCurrentPage: (state,actions) => {state.currentPage = actions.payload},
        setRequestSize:(state,actions) => {state.requestSize = actions.payload},
    }
})

export const { putFilteredData,getCurrentPage ,setRequestSize, } = paginRedux.actions

export default paginRedux.reducer
