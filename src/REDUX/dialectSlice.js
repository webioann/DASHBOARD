import { createSlice } from '@reduxjs/toolkit'

export const dialectSlice = createSlice({
    name: 'dialect',
    initialState: {
        lang: 'eng',
        themeMode: 'dark',
        sideBarStatus: 'hide',
    },
    reducers: {
        langEng: state => { state.lang = 'eng' },
        langUkr: state => { state.lang = 'ukr' },
        lightMode: state => { state.themeMode = 'light' },
        darkMode: state => { state.themeMode = 'dark' },
        sideBarHide: state => {state.sideBarStatus = 'hide'},
        sideBarShow: state => {state.sideBarStatus = 'show'},
    }
})

export const { langEng,langUkr,lightMode,darkMode,showModal,showChart,sideBarShow,sideBarHide } = dialectSlice.actions

export default dialectSlice.reducer;
