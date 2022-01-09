import React from "react"
import { useSelector,useDispatch } from "react-redux"
import { getCurrentPage } from '../Redux/reduxSlice'
import useButtonCreator from "../hooks/useButtonCreator"
import "./page-scroller.scss"

function Page_Scroller() {
    const dispatch = useDispatch()
    const themeMode = useSelector(state => state.dialect.themeMode)
    const currentPage = useSelector(state => state.redux.currentPage)
    const { pageNumberArray } = useButtonCreator()

    const goToPage = (event) => {
        dispatch(getCurrentPage(Number(event.target.id)))
    }
    

    return (
        <div className="pages-scroller">
            <div className="numy-row">
                {pageNumberArray.map((pageNumber,index) => (
                <span className={currentPage === pageNumber 
                    ? `numy-${themeMode} active-${themeMode}` : `numy-${themeMode}`}
                    key={index}
                    id={pageNumber}
                    onClick={goToPage}>
                    {pageNumber}
                </span>
                ))}
            </div>  
        </div>
    )
}
export default Page_Scroller;
