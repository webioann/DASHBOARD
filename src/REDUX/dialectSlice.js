import { createSlice } from '@reduxjs/toolkit'
import { multyLang } from '../data/multiLang'

export const dialectSlice = createSlice({
    name: 'dialect',
    initialState: {
        lang: 'eng',
        themeMode: 'light'
    },
    reducers: {
        langEng: state => { state.lang = 'eng' },
        langRus: state => { state.lang = 'rus' },
        lightMode: state => { state.themeMode = 'light' },
        darkMode: state => { state.themeMode = 'dark' },
    }
})

export const { langEng,langRus,lightMode,darkMode } = dialectSlice.actions

export default dialectSlice.reducer
