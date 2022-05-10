import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import NatBadge from '../NatBadge/NatBadge'
import ToolTip from '../ToolTip/ToolTip'
import { show_user_modal } from "../../Redux/dialectSlice"
import { getUuid } from '../../Redux/reduxSlice.js'
import UserNull from '../UserNull/UserNull'
import { FaPhone } from 'react-icons/fa'
import { AiOutlineMail } from "react-icons/ai"
import './users.scss'

function User() {

    const themeMode = useSelector(state => state.dialect.themeMode)
    const users = useSelector(state => state.redux.currentData)
    const dispatch = useDispatch()
    if( users.length === 0 ) {        
        return <UserNull/>
    }
    else {
        return (
            <ul className='user-box'>
                {users.map((user) => (
                    <ToolTip text='click for get full info'>
                    <li className={`user-${themeMode}`} 
                    onClick={() => {
                        dispatch(getUuid(user.login.uuid))
                        dispatch(show_user_modal(true))
                    }}
                    key={user.login.uuid}>

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
                            <NatBadge  user_nat={user.nat} /> 
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
                </li>
                </ToolTip>
                )
                )}
            </ul> 
        )
    }
}
export default User;

