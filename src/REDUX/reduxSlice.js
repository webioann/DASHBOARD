import { createSlice } from "@reduxjs/toolkit";

export const reduxSlice = createSlice({
    name: "redux",
    initialState: {
        gender: "both-sex",
        nationality: "ALL",
        data: [],
        filteredData: [],
        currentData: [],
        userFullData: [],
        currentPage: 1,
        requestSize: 50,
        usersOnPage: 20,
        uuid: '',
    },
    reducers: {
        setGender: (state, actions) => {state.gender = actions.payload},
        getNatId: (state, actions) => {state.nationality = actions.payload},
        fetchData: (state, actions) => {state.data = actions.payload},
        putFilteredData: (state, actions) => {state.filteredData = actions.payload},
        getCurrentData: (state, actions) => {state.currentData = actions.payload},
        getUserFullData: (state, actions) => {state.userFullData = actions.payload},
        getCurrentPage: (state, actions) => {state.currentPage = actions.payload},
        setRequestSize: (state, actions) => {state.requestSize = actions.payload},
        getUuid: (state, actions) => {state.uuid = actions.payload},
    },
});

export const {
    setGender,
    getNatId,
    fetchData,
    putFilteredData,
    getCurrentData,
    getUserFullData,
    getCurrentPage,
    setRequestSize,
    getUuid,
} = reduxSlice.actions;

export default reduxSlice.reducer;
