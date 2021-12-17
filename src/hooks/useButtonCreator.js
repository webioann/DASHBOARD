import { useState,useEffect } from "react"
import { useSelector } from 'react-redux'

const useButtonCreator = () => {

    const filteredData = useSelector((state) => state.pagin.filteredData)
    const usersOnPage = useSelector((state) => state.pagin.usersOnPage)
    const [pageNumberArray,setPNA] = useState([])
    const [lastPage,setLast] = useState('')
    let fullArray = []

    useEffect(() => {
        let totalPages = Math.ceil( filteredData.length / usersOnPage )
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

    },[filteredData])

    return { pageNumberArray,lastPage }
}
export default useButtonCreator;

