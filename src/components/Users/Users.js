import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import NatBadge from '../NatBadge/NatBadge'
import { getUuid } from '../../Redux/reduxSlice.js'
import UserNull from '../UserNull/UserNull'
import Modal from '../Modal/Modal'
import TopSimplePanel from '../Modal/TopSimplePanel'
import UserFullData from '../UserFullData/UserFullData'
import { FaPhone } from 'react-icons/fa'
import { AiOutlineMail } from "react-icons/ai"
import './users.scss'

function Users() {

    const themeMode = useSelector(state => state.dialect.themeMode)
    const users = useSelector(state => state.redux.currentData)
    const dispatch = useDispatch()
    const [modal,setModal] = useState(false)

    const closeModal = () => {
        setModal(false)
    }

    if( users.length === 0 ) {        
        return <UserNull/>
    }
    else {
        return (
            <ul className='user-box'>
                {modal ? (
                    <Modal modal={modal}>
                        <TopSimplePanel  closeModal={closeModal}/>
                        <UserFullData/>
                    </Modal>) 
                    : null
                }
                {users.map((user) => (
                    <li className={`user-${themeMode}`} key={user.login.uuid} 
                        onClick={() => {
                            dispatch(getUuid(user.login.uuid))
                            setModal(true) }}>
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
                            <p className='cell'>
                                <span>NAT</span>
                            </p>
                            {/* <NatBadge  userNat={user.nat}/>  */}
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

export default Users;

