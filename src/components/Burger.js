import React from 'react'
import { BsFilterSquare } from "react-icons/bs"
import './burger.css'

function Burger() {
    return (
        <span className="burger-box">
            <BsFilterSquare className="burger"/>
        </span>
    )
}

export default Burger;
