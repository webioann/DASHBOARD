// import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
// // import { useDispatch,useSelector } from 'react-redux'

// export const fetchAsyncData = createAsyncThunk(
//     'redux/fetchAsyncData ',
//     async function (requestSize,{rejectWithValue}) {
//         try{
//             const response = await fetch(`https://randomuser.me/api/?page=1&results=${requestSize}`)
//             if(response.ok)  {
//                 const data = await response.json() 
//                 return data}
//             else{ throw newError('Server Error') }
//         }
//         catch{ return rejectWithValue(error.massage)  }
//         finally{ }
//     }
// )

// export const dataSlice = createSlice({
//     name: 'data',
//     initialState: {
//         data: [],
//         loading: false,
//         error: null,
//         panel: 'hide',
//         gender: 'both-sex',
//         nationality: 'ALL',
//     },
//     reducers: {
//         getGender:(state,actions) => {state.gender = actions.payload},
//         getNatId: (state,actions) => {state.nationality = actions.payload},
//         fetchData: (state,actions) => {state.data = actions.payload},
//         getCurrentPage: (state,actions) => {state.currentPage = actions.payload},
//         panelShow: state => {state.panel = 'show'},
//         panelHide: state => {state.panel = 'hide'},
//     },
//     extraReducers: {
//         [fetchAsyncData.pending]: state => { state.loading = true },
//         [fetchAsyncData.fulfilled]:(state,actions) => {
//             state.loading = false;
//             state.data = actions.payload
//         },
//         [fetchAsyncData.rejected]:(state,actions) => { state.error = actions.payload },
//     }
// })

// export const { getGender,getNatId,fetchData,panelShow,panelHide, } = reduxSlice.actions

// export default dataSlice.reducer
