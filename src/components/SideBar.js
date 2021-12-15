import React from 'react'
import NatList from './NatList'
import GenderButton from './GenderButton'
import LangButton from './LangButton'
import Cross from './Cross'
import ThemeBtn from './ThemeBtn'
import { useSelector } from "react-redux"
import './sideBar.css'

function SideBar() {

    const panel = useSelector(state => state.redux.panel)
    const themeMode = useSelector(state => state.dialect.themeMode)
    const lang = useSelector((state) => state.dialect.lang)

    return (
        <div className={`side-bar-${themeMode} ${panel}`}>
            <div className={`button-grop-${themeMode}`} id="top">
                <LangButton/>
                <ThemeBtn/>
                <Cross/>
            </div>
            <div className={`button-grop-${themeMode}`}>
                <p className="title">
                    { lang === 'eng' 
                        ? 'nationality filters' 
                        : 'фильтрация по национальности'}</p>
                <NatList />
            </div>
            <div className={`button-grop-${themeMode}`}>
                <p className="title">
                    { lang === 'eng' 
                        ? 'gender filter' : 'фильтрация по полу'} </p>
                <GenderButton id={'both-sex'}/>
                <GenderButton id={'male'}/>
                <GenderButton id={'female'}/>
            </div>
        </div>
    )
}
export default SideBar;
