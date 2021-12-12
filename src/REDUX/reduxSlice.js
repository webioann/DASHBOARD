import { createSlice } from '@reduxjs/toolkit'

export const reduxSlice = createSlice({
    name: 'redux',
    initialState: {
        gender: 'both-sex',
        requestSize: 50,
        nationality: 'ALL',
        data: [],
        usersOnPage: 20,
        currentData: [],
        currentPage: 1,
        active: '',
        lang: 'eng',
    },
    reducers: {
        getGender:(state,actions) => {state.gender = actions.payload},
        setRequestSize:(state,actions) => {state.requestSize = actions.payload},
        getNationality: (state,actions) => {state.nationality = actions.payload},
        fetchData: (state,actions) => {state.data = actions.payload},
        putCurrentData: (state,actions) => {state.currentData = actions.payload},
        getCurrentPage: (state,actions) => {state.currentPage = actions.payload},
        activate: (state,actions) => {state.active = actions.payload},
        langToggler: (state,actions) => {state.lang = actions.payload}
    }
})

export const 
    { getGender,setRequestSize,getNationality,putCurrentData,fetchData,getCurrentPage,activate,langToggler }
    = reduxSlice.actions

export default reduxSlice.reducer
