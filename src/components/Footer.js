import React from 'react'
import Pagination from './Pagination'
import RequestSize from './RequestSize'
import { useSelector } from "react-redux"
import './footer.css'

function Footer() {

    const themeMode = useSelector(state => state.dialect.themeMode)

    return (
        <footer className={`footer-${themeMode}`}>
            <div className={`footer-box-${themeMode}`}>
                <Pagination/>
                <RequestSize/>
            </div>
        </footer>
    )
}
export default Footer;
