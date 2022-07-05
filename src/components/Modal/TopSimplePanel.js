import React from 'react'
import { ImCross } from "react-icons/im"
import './top-simple-panel.less'

function TopSimplePanel({ closeModal }) {

    return (
        <div className="top">
            <i className="close-cross">
                <ImCross onClick={ closeModal }/>
            </i>
        </div>
    )
}
export default TopSimplePanel;
