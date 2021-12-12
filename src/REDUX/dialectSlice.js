import { createSlice } from '@reduxjs/toolkit'
import { multyLang } from '../data/multiLang'

export const dialectSlice = createSlice({
    name: 'dialect',
    initialState: {
        lang: multyLang.eng
    },
    reducers: {
        langEng: state => { state.lang = multyLang.eng },
        langRus: state => { state.lang = multyLang.rus },
    }
})

export const { langEng,langRus } = dialectSlice.actions

export default dialectSlice.reducer
