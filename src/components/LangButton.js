import React,{ useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { langToggler } from '../Redux/reduxSlice'

import './langButton.css'

function LangButton() {

    const dispatch = useDispatch()
    const lang = useSelector((state) => state.redux.lang)
    const [margin,setMargin] = useState(0) //margin it is half of width "switcher-box"
    const [engClass,setEngClass] = useState('switcher shade')
    const [rusClass,setRusClass] = useState('switcher')

    const toggler = (event) => {
        let id = event.target.id
        if( margin === 0 && id === 'rus') {
            setMargin(40)
            setEngClass('switcher')
            setRusClass('switcher shade')
            dispatch(langToggler(id))
        }
        else if( margin === 40 && id === 'eng') {
            setMargin(0)
            setEngClass('switcher shade')
            setRusClass('switcher')
            dispatch(langToggler(id))
        }
    }

    return (
        <div className="lang-button-box">
            <div className="switcher-box">
                <span className={engClass}
                    id = 'eng' 
                    onClick={toggler}>
                    eng
                </span>
                <span className={rusClass}
                    id = 'rus'
                    onClick={toggler}>
                    rus
                </span>
            </div>
            <div className="slider-box">
                <span className="slider" 
                    style={{marginLeft: `${margin}px`}}>
                </span>
            </div>
        </div>
    )
}

export default LangButton;
