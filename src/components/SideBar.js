import React,{ useState,useEffect } from 'react'
import NatList from './NatList'
import GenderButton from './GenderButton'
import LangButton from './LangButton'
import Cross from './Cross'
import ThemeBtn from './ThemeBtn'
import { useSelector } from "react-redux"

import './sideBar.css'

function SideBar() {

    const panel = useSelector(state => state.redux.panel)

    return (
        <div className={`side-bar ${panel}`}>
            <div className="button-grop" id="top">
                <LangButton/>
                <ThemeBtn/>
                <Cross/>

            </div>
            <div className="button-grop">
                <p className="title"> nationality filters</p>
                <NatList />
            </div>
            <div className="button-grop">
                <p className="title"> gender filter </p>
                <GenderButton id={'both-sex'}/>
                <GenderButton id={'male'}/>
                <GenderButton id={'female'}/>
            </div>
        </div>
    )
}

export default SideBar;
