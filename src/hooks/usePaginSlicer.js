import { useState,useEffect } from "react"
import { useSelector,useDispatch } from 'react-redux'
import { getPageNumberArray,setLastPage } from "../Redux/paginRedux"

const usePaginSlicer = () => {

    const dispatch = useDispatch()
    const currentData = useSelector((state) => state.pagin.currentData)
    const [pageNumberArray,setPNA] = useState([])
    const [lastPage,setLast] = useState('')
    const usersOnPage = useSelector((state) => state.pagin.usersOnPage)
    let fullArray = []

    useEffect(() => {
        let totalPages = Math.ceil( currentData.length / usersOnPage )
        for (let i = 1; i <= totalPages; i++) {
            fullArray.push(i)
        }
        let penultPage = fullArray.length -1
        let lastPage = fullArray.length
        if( totalPages < 7 ) {
            setPNA(fullArray)
        }
        else if( totalPages === 7) {
            let tempArray = [1,2,3,4,'...',lastPage]
            setPNA(tempArray)
        }
        else if( totalPages > 7) {
            let tempArray = [1,2,3,4,'...',penultPage,lastPage]
            setPNA(tempArray)
        }
        setLast(fullArray.length)

    },[currentData])
    // console.log(`PNA = ${pageNumberArray}`)
    // console.log(`U on P = ${usersOnPage}`)
    // console.log(`C DATA length = ${currentData.length}`)
    // dispatch(getPageNumberArray(pageNumberArray))
    // dispatch(setLastPage(lastPage))

    return { pageNumberArray,lastPage }
}
export default usePaginSlicer;

