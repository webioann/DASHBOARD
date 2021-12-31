import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { getCurrentData,getCurrentPage } from '../Redux/reduxSlice'

const usePageCutter = () => {

    const dispatch = useDispatch()
    const usersOnPage = useSelector((state) => state.redux.usersOnPage)
    const currentPage = useSelector((state) => state.redux.currentPage)
    const filteredData = useSelector(state => state.redux.filteredData)
    let end = currentPage * usersOnPage
    let start = end - usersOnPage
    let onePageData = filteredData.slice(start,end)

    useEffect(() => {
        dispatch(getCurrentPage(1)) // after any filteredData changes, the first pagination button becomes active
    },[filteredData])

    useEffect(() => {
        dispatch(getCurrentData(onePageData))
    },[currentPage,filteredData])

    return null
}
export default usePageCutter;

