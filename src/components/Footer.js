import React from 'react'
import { useSelector } from "react-redux"
import './footer.css'

function Footer(props) {

    const themeMode = useSelector(state => state.dialect.themeMode)

    return (
        <footer className={`footer-${themeMode}`}>
            <div className={`footer-box-${themeMode}`}>
                {props.children}
            </div>
        </footer>
    )
}
export default Footer;
