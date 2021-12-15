import React,{ useState,useEffect } from "react"
import { useSelector,useDispatch } from "react-redux";
import { getCurrentPage } from '../Redux/reduxSlice'



const usePagination = ( data,usersOnPage,currentPage) => {

    const dispatch = useDispatch()

    let end = currentPage * usersOnPage
    let start = end - usersOnPage
    let slicedData = data.slice(start,end)

    useEffect(() => {
        dispatch(getCurrentPage(1)) // after any data changes, the first pagination button becomes active
    },[data])

    return slicedData
}
export default usePagination;

