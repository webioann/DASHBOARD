import { useEffect,useRef } from "react"
import { useSelector,useDispatch } from "react-redux"
import { getCurrentData } from '../Redux/reduxSlice'

const usePageCutter = () => {

    const dispatch = useDispatch()
    const usersOnPage = useSelector((state) => state.redux.usersOnPage)
    const currentPage = useSelector((state) => state.redux.currentPage)
    const filteredData = useSelector(state => state.redux.filteredData)
    let prevPage = useRef(1)

    let end = currentPage * usersOnPage
    let start = end - usersOnPage
    let onePageData = filteredData.slice(start,end)

    useEffect(() => {
        if( currentPage > 0 ) {
            dispatch(getCurrentData(onePageData))
            localStorage.setItem('CURRENT_PAGE_DATA',JSON.stringify(onePageData))
        }
        else if( currentPage === 'DOTS_UP' || currentPage === 'DOTS_DOWN' ) {
            let raw = localStorage.getItem('CURRENT_PAGE_DATA')
            let data = JSON.parse(raw)
            dispatch(getCurrentData(data))
        }
    },[currentPage,filteredData])

    return null
}
export default usePageCutter;

