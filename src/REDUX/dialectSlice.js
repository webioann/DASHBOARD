import { createSlice } from '@reduxjs/toolkit'

export const dialectSlice = createSlice({
    name: 'dialect',
    initialState: {
        lang: 'eng',
        themeMode: 'light',
        modalData: '',
        userLoginUuid: '',
        modalVisibility: false,
    },
    reducers: {
        langEng: state => { state.lang = 'eng' },
        langRus: state => { state.lang = 'rus' },
        lightMode: state => { state.themeMode = 'light' },
        darkMode: state => { state.themeMode = 'dark' },
        putDataForModal: (state,actions) => { state.modalData = actions.payload},
        showModal: (state,actions) => { state.modalVisibility = actions.payload},
        getUserLoginUuid: (state,actions) => { state.userLoginUuid = actions.payload}
    }
})

export const { langEng,langRus,lightMode,darkMode,getUserLoginUuid,showModal,putDataForModal } = dialectSlice.actions

export default dialectSlice.reducer
