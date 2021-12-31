import { createSlice } from '@reduxjs/toolkit'

export const reduxSlice = createSlice({
    name: 'redux',
    initialState: {
        gender: 'both-sex',
        nationality: 'ALL',
        data: [],
        filteredData: [],
        currentData: [],
        modalData: [],
        userLoginUuid: 'uuid',
        currentPage: 1,
        requestSize: 50,
        usersOnPage: 20,
    },
    reducers: {
        getGender:(state,actions) => {state.gender = actions.payload},
        getNatId: (state,actions) => {state.nationality = actions.payload},
        fetchData: (state,actions) => {state.data = actions.payload},
        putFilteredData: (state,actions) => {state.filteredData = actions.payload},
        getCurrentData: (state,actions) => {state.currentData = actions.payload},
        putDataForModal: (state,actions) => { state.modalData = actions.payload},
        getUserLoginUuid: (state,actions) => { state.userLoginUuid = actions.payload},
        getCurrentPage: (state,actions) => {state.currentPage = actions.payload},
        setRequestSize:(state,actions) => {state.requestSize = actions.payload},
    }
})

export const { getGender,getNatId,fetchData,putFilteredData,getCurrentData,
    putDataForModal, getUserLoginUuid,getCurrentPage ,setRequestSize,} = reduxSlice.actions

export default reduxSlice.reducer
