import { createSlice } from '@reduxjs/toolkit'

export const dialectSlice = createSlice({
    name: 'dialect',
    initialState: {
        lang: 'eng',
        themeMode: 'dark',
        sideBarStatus: 'hide',
        chartsModal: false,
    },
    reducers: {
        langEng: state => { state.lang = 'eng' },
        langUkr: state => { state.lang = 'ukr' },

        lightMode: state => { state.themeMode = 'light' },
        darkMode: state => { state.themeMode = 'dark' },

        sideBarHide: state => {state.sideBarStatus = 'hide'},
        sideBarShow: state => {state.sideBarStatus = 'show'},

        showChartsModal: state => {state.chartsModal = true},
        closeChartsModal: state => {state.chartsModal = false},

    }
})

export const { langEng, langUkr, lightMode, darkMode, sideBarShow, sideBarHide, showChartsModal, closeChartsModal } = dialectSlice.actions

export default dialectSlice.reducer;
