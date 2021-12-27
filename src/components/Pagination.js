import React from "react"
import { useSelector,useDispatch } from "react-redux"
import { getCurrentPage } from '../Redux/paginSlice'
import { MdOutlineKeyboardArrowRight,MdOutlineKeyboardArrowLeft } from "react-icons/md"
import useButtonCreator from "../hooks/useButtonCreator"
import "./style/pagination.css"

function Pagination() {

  const dispatch = useDispatch()
  const themeMode = useSelector(state => state.dialect.themeMode)
  const currentPage = useSelector((state) => state.pagin.currentPage)

  const { pageNumberArray,lastPage } = useButtonCreator()

  const goToPage = (event) => {
    dispatch(getCurrentPage(Number(event.target.id)))
  }

  const nextPage = () => {
    currentPage < lastPage 
      ? dispatch(getCurrentPage(Number(currentPage + 1))) 
      : dispatch(getCurrentPage(Number(lastPage)))
  }

  const prevPage = () => {
    currentPage !== 1 
      ? dispatch(getCurrentPage(Number(currentPage - 1))) 
      : dispatch(getCurrentPage( 1 ))
  }

  return (
    <div className="pages">
      <MdOutlineKeyboardArrowLeft 
        onClick={prevPage} 
        className={currentPage === 1 
          ? `blocked-arrow-${themeMode}` : `arrow-${themeMode}`} />
        {pageNumberArray.map((pageNumber,index) => (
          <span className={currentPage === pageNumber 
            ? `num-${themeMode} active-${themeMode}` : `num-${themeMode}`}
            key={index}
            id={pageNumber}
            onClick={goToPage}>
            {pageNumber}
          </span>
        ))}
      <MdOutlineKeyboardArrowRight 
        onClick={nextPage} 
        className={currentPage === lastPage ? `blocked-arrow-${themeMode}` : `arrow-${themeMode}`} />
    </div>
  );
}
export default Pagination;



