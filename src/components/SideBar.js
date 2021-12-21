import React from 'react'
import NatList from './NatList'
import LangButton from './LangButton'
import Cross from './Cross'
import ThemeBtn from './ThemeBtn'
import BoothGender from './BoothGender'
import FemaleGender from './FemaleGender'
import MaleGender from './MaleGender'
import Title from './Title'
import { title_nat_filters,title_gender_filters } from '../data/multiLang'

import { useSelector } from "react-redux"
import './sideBar.css'

import Group from './Group'

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
                <Title text={title_nat_filters}/>
                <NatList />
            </div>

            <div className={`button-grop-${themeMode}`}>
                <Title text={title_gender_filters}/>
                <BoothGender/>
                <FemaleGender/>
                <MaleGender/>
            </div>
            
        </div>
    )
}
export default SideBar;
