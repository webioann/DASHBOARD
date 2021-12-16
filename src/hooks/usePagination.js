import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux";
import { getCurrentPage } from '../Redux/paginRedux'

const usePagination = () => {

    const dispatch = useDispatch()
    const usersOnPage = useSelector((state) => state.pagin.usersOnPage)
    const currentPage = useSelector((state) => state.pagin.currentPage)
    const currentData = useSelector(state => state.pagin.currentData)

    let end = currentPage * usersOnPage
    let start = end - usersOnPage
    let slicedData = currentData.slice(start,end)

    useEffect(() => {
        // after any currentData changes, the first pagination button becomes active
        dispatch(getCurrentPage(1)) 
    },[currentData])

    return slicedData
}
export default usePagination;

