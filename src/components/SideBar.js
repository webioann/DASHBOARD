import React from 'react'
import NatList from './NatList'
import GenderButton from './GenderButton'
import LangButton from './LangButton'
import './sideBar.css'

function SideBar() {
    return (
        <div className='side-bar'>
            <div className="button-grop">
                <LangButton/>
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
