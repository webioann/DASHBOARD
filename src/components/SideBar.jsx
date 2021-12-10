import React from 'react'
import NatList from './NatList'
import './sideBar.css'

function SideBar() {
    return (
        <div className='side-bar'>
            <div className="side-bar-wrapper">
                <h3 className="side-bar-title">
                    Gender filters
                </h3>
                <NatList />
            </div>
        </div>
    )
}

export default SideBar;
