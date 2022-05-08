import { createSlice } from '@reduxjs/toolkit'

export const dialectSlice = createSlice({
    name: 'dialect',
    initialState: {
        lang: 'eng',
        themeMode: 'light',
        modal: false,
        chart: false,

        sideBarStatus: 'hide',
    },
    reducers: {
        langEng: state => { state.lang = 'eng' },
        langRus: state => { state.lang = 'rus' },
        lightMode: state => { state.themeMode = 'light' },
        darkMode: state => { state.themeMode = 'dark' },

        showModal: (state,actions) => { state.modal = actions.payload},
        showChart: (state,actions) => { state.chart = actions.payload},

        sideBarShow: state => {state.sideBarStatus = 'show'},
        sideBarHide: state => {state.sideBarStatus = 'hide'},
    }
})

export const { langEng,langRus,lightMode,darkMode,showModal,showChart,sideBarShow,sideBarHide } = dialectSlice.actions

export default dialectSlice.reducer
