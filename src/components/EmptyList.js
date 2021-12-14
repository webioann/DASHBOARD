import React,{ useState,useEffect } from 'react'
import { useSelector} from 'react-redux'
import './emptyList.css'

function EmptyList() {
    
    const lang = useSelector((state) => state.dialect.lang)
    const themeMode = useSelector(state => state.dialect.themeMode)

    return (
        <div className={`empty-list-${themeMode}`}>
            <h3 className="massege">{lang.emptyListMessage}</h3>
        </div>
    )
}

export default EmptyList;

