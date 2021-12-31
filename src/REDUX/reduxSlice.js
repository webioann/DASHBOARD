import { createSlice } from '@reduxjs/toolkit'

export const reduxSlice = createSlice({
    name: 'redux',
    initialState: {
        gender: 'both-sex',
        nationality: 'ALL',
        data: [],
        currentData: [],
        panel: 'hide',
    },
    reducers: {
        getGender:(state,actions) => {state.gender = actions.payload},
        getNatId: (state,actions) => {state.nationality = actions.payload},
        fetchData: (state,actions) => {state.data = actions.payload},
        getCurrentData: (state,actions) => {state.currentData = actions.payload},
        panelShow: state => {state.panel = 'show'},
        panelHide: state => {state.panel = 'hide'},
    }
})

export const { getGender,getNatId,fetchData,getCurrentData,panelShow,panelHide, } = reduxSlice.actions

export default reduxSlice.reducer
