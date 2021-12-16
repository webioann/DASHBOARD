import { createSlice } from '@reduxjs/toolkit'

export const reduxSlice = createSlice({
    name: 'redux',
    initialState: {
        gender: 'both-sex',
        nationality: 'ALL',
        data: [],
        panel: 'hide',
    },
    reducers: {
        getGender:(state,actions) => {state.gender = actions.payload},
        getNationality: (state,actions) => {state.nationality = actions.payload},
        fetchData: (state,actions) => {state.data = actions.payload},
        getCurrentPage: (state,actions) => {state.currentPage = actions.payload},
        panelShow: state => {state.panel = 'show'},
        panelHide: state => {state.panel = 'hide'},
    }
})

export const 
    { getGender,getNationality,fetchData,panelShow,panelHide, }
    = reduxSlice.actions

export default reduxSlice.reducer
