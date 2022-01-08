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
    const [beforeDotsPage,setBeforeDotsPage] = useState(5)

    useEffect(() => {
        dispatch(getCurrentPage(1)) // after any filteredData changes, the first pagination button becomes active
        let fullArray = []
        let totalPages = Math.ceil( filteredData.length / usersOnPage )

        for (let i = 1; i <= totalPages; i++) {
            fullArray.push(i)
        }
        setLast(fullArray.length)

        let lastPage = fullArray.length
        let penultPage = fullArray.length -1

        if( totalPages <= 8  ) {
            setPNA(fullArray)
        }
        else if( totalPages > 8 ) {
            let tempArray = [1,2,3,4,beforeDotsPage,'...',penultPage,lastPage];
            setPNA(tempArray);
        }
        
    },[ filteredData ])

    return { pageNumberArray,lastPage }
}
export default useButtonCreator;

