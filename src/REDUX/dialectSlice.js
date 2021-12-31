import { createSlice } from '@reduxjs/toolkit'

export const dialectSlice = createSlice({
    name: 'dialect',
    initialState: {
        lang: 'eng',
        themeMode: 'light',
        modalVisibility: false,
        panel: 'hide',
    },
    reducers: {
        langEng: state => { state.lang = 'eng' },
        langRus: state => { state.lang = 'rus' },
        lightMode: state => { state.themeMode = 'light' },
        darkMode: state => { state.themeMode = 'dark' },
        showModal: (state,actions) => { state.modalVisibility = actions.payload},
        panelShow: state => {state.panel = 'show'},
        panelHide: state => {state.panel = 'hide'},

    }
})

export const { langEng,langRus,lightMode,darkMode,showModal,panelShow,panelHide, } = dialectSlice.actions

export default dialectSlice.reducer
