import React from "react"
import { useSelector,useDispatch } from "react-redux"
import { getCurrentPage } from '../Redux/reduxSlice'
import useButtonCreator from "../hooks/useButtonCreator"
import usePageCutter from '../hooks/usePageCutter.js'
import "../CSS/pagination.less"

function Pagination() {

    const dispatch = useDispatch()
    const themeMode = useSelector(state => state.dialect.themeMode)
    const currentPage = useSelector(state => state.redux.currentPage)
    const {pageNumberArray}  = useButtonCreator()
    usePageCutter() //slicing data for one page

    return (
        <div className="pages-scroller">
            <div className="numy-row">
                {pageNumberArray.map((pageNumber,index) => (
                <span className={currentPage === pageNumber ? `numy-${themeMode} active-${themeMode}` : `numy-${themeMode}`}
                    key={index}
                    id={pageNumber}
                    onClick={() => dispatch(getCurrentPage(Number(pageNumber)))}>
                    {pageNumber}
                </span>
                ))}
            </div>  
        </div>
    )
}

export default Pagination;
