import { createSlice } from '@reduxjs/toolkit'
import { multyLang } from '../data/multiLang'

export const dialectSlice = createSlice({
    name: 'dialect',
    initialState: {
        lang: 'eng',
        themeMode: 'light',
        tool_tip_id: ''
    },
    reducers: {
        langEng: state => { state.lang = 'eng' },
        langRus: state => { state.lang = 'rus' },
        lightMode: state => { state.themeMode = 'light' },
        darkMode: state => { state.themeMode = 'dark' },
        getToolTipId: (state,actions) => { state.tool_tip_id = actions.payload}
    }
})

export const { langEng,langRus,lightMode,darkMode,getToolTipId } = dialectSlice.actions

export default dialectSlice.reducer
