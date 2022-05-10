import { createSlice } from '@reduxjs/toolkit'

export const dialectSlice = createSlice({
    name: 'dialect',
    initialState: {
        lang: 'eng',
        themeMode: 'light',

        modal: false,
        chart: false,

        chart_modal: false,
        user_modal: false,

        sideBarStatus: 'hide',
    },
    reducers: {
        langEng: state => { state.lang = 'eng' },
        langUkr: state => { state.lang = 'ukr' },
        lightMode: state => { state.themeMode = 'light' },
        darkMode: state => { state.themeMode = 'dark' },

        showModal: (state,actions) => { state.modal = actions.payload},
        showChart: (state,actions) => { state.chart = actions.payload},

        show_chart_modal: (state,actions) => { state.chart_modal = actions.payload},
        show_user_modal: (state,actions) => { state.user_modal = actions.payload},

        sideBarShow: state => {state.sideBarStatus = 'show'},
        sideBarHide: state => {state.sideBarStatus = 'hide'},
    }
})

export const { langEng,langUkr,lightMode,darkMode,showModal,showChart,sideBarShow,sideBarHide,  
    show_chart_modal,show_user_modal

} = dialectSlice.actions

export default dialectSlice.reducer
