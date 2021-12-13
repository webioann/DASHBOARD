import React from 'react'
import Pagination from './Pagination'
import RequestSize from './RequestSize'
import './footer.css'

function Footer() {
    return (
        <footer className='footer'>
            <div className="footer-wrapper">
                <Pagination/>
                <RequestSize/>
            </div>
        </footer>
    )
}

export default Footer;
