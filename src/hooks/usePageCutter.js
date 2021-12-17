import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { getCurrentPage } from '../Redux/paginRedux'

const usePageCutter = () => {

    const dispatch = useDispatch()
    const usersOnPage = useSelector((state) => state.pagin.usersOnPage)
    const currentPage = useSelector((state) => state.pagin.currentPage)
    const filteredData = useSelector(state => state.pagin.filteredData)

    let end = currentPage * usersOnPage
    let start = end - usersOnPage
    let onePageData = filteredData.slice(start,end)

    useEffect(() => {
        // after any currentData changes, the first pagination button becomes active
        dispatch(getCurrentPage(1)) 
    },[filteredData])

    return onePageData
}
export default usePageCutter;

