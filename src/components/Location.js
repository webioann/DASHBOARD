import React from 'react'
import './app.scss'

function Location(props) {
    const user = props.user;

    return (
        <div>
            <span > / {user.location.country} /</span>
            <span>{user.location.street.number},{user.location.street.name} street,</span>
            <span>{user.location.city},{user.location.state}.</span>
        </div>
    )
}
export default Location;