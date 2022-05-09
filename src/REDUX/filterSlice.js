import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        sort_by: 'sort random',
    },
    reducers: {
        sort_random: state => { state.sort_by = 'sort random' },
        sort_up: state => { state.sort_by = 'sort up' },
        sort_down: state => { state.sort_by = 'sort down' },
    }
})

export const { sort_random,sort_up,sort_down } = filterSlice.actions

export default filterSlice.reducer
