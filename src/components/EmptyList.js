import React,{ useState,useEffect} from 'react'
import { useSelector} from 'react-redux'
import { multyLang } from '../data/multiLang'
import './emptyList.css'

function EmptyList() {
    
    const lang = useSelector((state) => state.dialect.lang)
    const themeMode = useSelector(state => state.dialect.themeMode)
    const [text,setText] = useState('')

    useEffect(() => {
        lang === 'eng' ? setText(multyLang.eng.emptyListMessage) : setText(multyLang.rus.emptyListMessage)
    },[lang])

    return (
        <div className={`empty-list-${themeMode}`}>
            <h3 className="massege">{text}</h3>
        </div>
    )
}
export default EmptyList;

