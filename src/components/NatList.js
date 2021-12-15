import React from 'react'
import nations from '../data/nations'
import { useDispatch,useSelector } from "react-redux"
import { getNationality } from '../Redux/reduxSlice'
import { ImCheckboxChecked,ImCheckboxUnchecked } from "react-icons/im";
import './natList.css'

function ListOfNationalities() {

    const dispatch = useDispatch()
    const activeNationality = useSelector(state => state.redux.nationality)
    const themeMode = useSelector(state => state.dialect.themeMode)
    // const natActive = `nat-${themeMode} active-${themeMode}`
    // const nat = `nat-${themeMode}`

    function chooseNationality (event) {
        let id = event.target.id //event.target.id it is nationality code FN,GB,CA,US...
        dispatch(getNationality(id)) //put active nationality code in the redux store
    }

    return (
        <ul className= 'list'>
            {nations.map((nation) =>(
            <li className={activeNationality === nation.code 
                ? `nat-${themeMode} active-${themeMode}`
                : `nat-${themeMode}` }
                key={nation.code}
                onClick={chooseNationality} 
                id={nation.code}>
                    <i className={`icon-${themeMode}`}>
                        {(activeNationality === nation.code) 
                        ? <ImCheckboxChecked/> : <ImCheckboxUnchecked/>}
                    </i>
                {nation.name}
            </li>))}   
        </ul>
    )
}

export default ListOfNationalities;
