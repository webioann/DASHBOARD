import React,{ useState,useEffect } from 'react'
import { useSelector} from 'react-redux'
import { multyLang } from '../data/multiLang'


const box = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '85px',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
}
const massage = {
    textTransform: 'uppercase',
    letterSpacing: '2px'
}

function EmptyList() {
    
    const lang = useSelector((state) => state.redux.lang)
    const [content,setContent] = useState('')

    useEffect(() => {
        lang === 'eng' 
            ? setContent(multyLang.eng.emptyListMessage) 
            : setContent(multyLang.rus.emptyListMessage)
    },[lang])

    return (
        <div style={box}>
            <h2 style={massage}>{content}</h2>
        </div>
    )
}

export default EmptyList
// no users found by these parameters