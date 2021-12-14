import { createSlice } from '@reduxjs/toolkit'
import { multyLang } from '../data/multiLang'

export const dialectSlice = createSlice({
    name: 'dialect',
    initialState: {
        lang: multyLang.eng,
        themeMode: 'light'
    },
    reducers: {
        langEng: state => { state.lang = multyLang.eng },
        langRus: state => { state.lang = multyLang.rus },
        lightMode: state => { state.themeMode = 'light' },
        darkMode: state => { state.themeMode = 'dark' },
    }
})

export const { langEng,langRus,lightMode,darkMode } = dialectSlice.actions

export default dialectSlice.reducer
