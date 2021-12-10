import React from 'react'
import Pagination from './Pagination.jsx'
import RequestSize from './RequestSize.jsx'
import './footer.css'

function Footer() {
    return (
        <div className='footer'>
            <Pagination/>
            <RequestSize/>
        </div>
    )
}

export default Footer;
