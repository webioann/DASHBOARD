import React from 'react'
import { useSelector } from 'react-redux'
import NatBadge from '../NatBadge/NatBadge'
import Button_Full_Info from '../Button_Full_Info/Button_Full_Info'
import UserNull from '../UserNull/UserNull'
import { FaPhone } from 'react-icons/fa'
import { AiOutlineMail } from "react-icons/ai"
import './users.scss'

function User() {

    const themeMode = useSelector(state => state.dialect.themeMode)
    const users = useSelector(state => state.redux.currentData)

    if( users.length === 0 ) {        
        return <UserNull/>
    }
    else {
        return (
            <ul className='user-box'>
                {users.map((user) => (
                <li className={`user-${themeMode}`} key={user.login.uuid}>

                    <div className="pass">
                        <div className="avatar">
                            <img src={user.picture.medium} className='photo' alt=''/> 
                        </div>
                        <div className="info">
                            <h3 className="full-name cell">
                                {user.name.first} {user.name.last}
                            </h3>
                            <p className="age cell">
                                {user.dob.age} years ( {new Date(user.dob.date).toLocaleDateString()} )
                            </p>
                            <div className='row'>
                                <NatBadge  user_nat={user.nat} /> 
                                <Button_Full_Info uuid={user.login.uuid}/>
                            </div>
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

