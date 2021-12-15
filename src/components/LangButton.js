import React,{ useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { langEng,langRus } from '../Redux/dialectSlice'
import './langButton.css'

function LangButton() {

    const dispatch = useDispatch()
    const themeMode = useSelector(state => state.dialect.themeMode)
    const lang = useSelector(state => state.dialect.lang)
    const [margin,setMargin] = useState(0) //margin it is half of width "switcher-box"

    const toggler = (event) => {
        let id = event.target.id
        if( margin === 0 && id === 'rus') {
            setMargin(40)
            dispatch(langRus())
        }
        else if( margin === 40 && id === 'eng') {
            setMargin(0)
            dispatch(langEng())
        }
    }

    return (
        <div className={`lang-button-${themeMode}`}>
            <div className="switcher-box">
                <span className={ lang === 'eng' ? `switcher shade-${themeMode}` : 'switcher'}
                    id = 'eng' 
                    onClick={toggler}>
                    eng
                </span>
                <span className={ lang === 'rus' ? `switcher shade-${themeMode}` : 'switcher'}
                    id = 'rus'
                    onClick={toggler}>
                    rus
                </span>
            </div>
            <div className="slider-box">
                <span className={`slider-${themeMode}`} 
                    style={{marginLeft: `${margin}px`}}>
                </span>
            </div>
        </div>
    )
}
export default LangButton;
