import React from 'react'
import { useSelector } from 'react-redux'
import usePageCutter from '../hooks/usePageCutter.js'
import useFilters from '../hooks/useFilters.js'
import useBirthday from '../hooks/useBirthday.js'
import Birthday from './Birthday'
import NatBadge from './NatBadge'
import EmptyList from './EmptyList'
import { FaPhone} from 'react-icons/fa'
import { AiOutlineMail } from "react-icons/ai"
import './user.css'

function User() {

    const themeMode = useSelector(state => state.dialect.themeMode)
    const filteredData = useFilters() //we receive the filtered data
    const users = usePageCutter() //slicing data for one page

    if( users.length === 0 ) {        
        return <EmptyList/>
    }
    else {
        return (
            <ul className='user-box'>
                {users.map((user) => (<li className={`user-${themeMode}`} key={user.login.uuid} >
                    <div className="pass">
                        <div className="avatar">
                            <img src={user.picture.medium} className='photo' alt=''/> 
                        </div>
                        <div className="info">
                            <h3 className="full-name cell">
                                {user.name.first} {user.name.last}
                            </h3>
                            <p className="age cell">
                                {user.dob.age} years (<Birthday user={user.dob.date}/>)
                            </p>
                            <NatBadge  user={user} /> 
                        </div>
                    </div>
                    <div className='contacts'>
                        <div className="mail cell">
                            <i className={`icon-${themeMode}`}><AiOutlineMail/></i>
                            <p>{user.email}</p>
                        </div>
                        <div className="tel cell">
                            <i className={`icon-${themeMode}`}><FaPhone/></i>
                            <p>{user.phone}</p>
                        </div>
                    </div>
                    <div className="location">
                        <p className='cell'>/ {user.location.country}  /</p>
                        <p className='cell'>{user.location.state} , {user.location.city}  </p>
                        <p className='cell'>{user.location.street.number},{user.location.street.name} street,</p>
                    </div>
                </li>))}
            </ul> 
        )
    }
}
export default User;

  