import { useState,useEffect } from "react"
import { useSelector,useDispatch } from 'react-redux'
import { getCurrentPage } from '../Redux/reduxSlice'

const useButtonCreator = () => {

    const dispatch = useDispatch()
    const filteredData = useSelector((state) => state.redux.filteredData)
    const usersOnPage = useSelector((state) => state.redux.usersOnPage)
    const currentPage = useSelector((state) => state.redux.currentPage)

    const [pageNumberArray,setPNA] = useState([])
    const [lastPage,setLast] = useState('')

    useEffect(() => {
        dispatch(getCurrentPage(1)) // after any filteredData changes, the first pagination button becomes active

        let totalPages = Math.ceil( filteredData.length / usersOnPage )
        let fullArray = []
        for (let i = 1; i <= totalPages; i++) {
            fullArray.push(i)
        }
        let penultPage = fullArray.length -1
        let lastPage = fullArray.length
        let tempArray = []

        if( totalPages <= 7 ) {
            setPNA(fullArray)
        }
        else if( totalPages > 7) {
            tempArray = [1,2,3,4,'...',penultPage,lastPage];
            setPNA(tempArray);
        }
        setLast(fullArray.length)
    },[filteredData])

    return { pageNumberArray,lastPage }
}
export default useButtonCreator;

