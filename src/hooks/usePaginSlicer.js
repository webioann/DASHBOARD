import { useState,useEffect } from "react"

const usePaginSlicer = (currentData) => {
    const [pageNumberArray,setPNA] = useState([])
    const [lastPage,setLastPage] = useState('')
    const usersOnPage = 20
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
        setLastPage(fullArray.length)

    },[currentData])

    return { pageNumberArray,lastPage }
}

export default usePaginSlicer;

