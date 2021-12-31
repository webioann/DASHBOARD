import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import NatBadge from './NatBadge'
import UserNull from './UserNull'
import { FaPhone } from 'react-icons/fa'
import { AiOutlineMail } from "react-icons/ai"
import { getUserLoginUuid,showModal,putDataForModal } from '../Redux/reduxSlice.js'
import './style/user.css'

function User() {

    const dispatch = useDispatch()
    const themeMode = useSelector(state => state.dialect.themeMode)
    const users = useSelector(state => state.redux.currentData)

    // console.log(`USERS --> ${JSON.stringify(users[0].name.last)}`)

    if( users.length === 0 ) {        
        return <UserNull/>
    }
    else {
        return (
            <ul className='user-box'>
                {users.map((user,index) => (
                    <li className={`user-${themeMode}`} 
                        key={user.login.uuid}
                        onClick={() => {dispatch(getUserLoginUuid(index))
                        }}
                        >
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

// dispatch(showModal(true))
// dispatch(getUserLoginUuid(user.login.uuid))
// dispatch(putDataForModal(user))
