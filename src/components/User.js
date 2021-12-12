import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { putCurrentData } from '../Redux/reduxSlice'
import usePagination from '../hooks/usePagination.js'
import useFilters from '../hooks/useFilters.js'
import Birthday from './Birthday'
import Nationality from './Nationality'
import EmptyList from './EmptyList'
import { FaPhone} from 'react-icons/fa'
import { AiOutlineMail } from "react-icons/ai"
import './user.css'

function User() {
    
    const dispatch = useDispatch()
    const usersOnPage = useSelector((state) => state.redux.usersOnPage)
    const currentPage = useSelector((state) => state.redux.currentPage)
    const data = useSelector((state) => state.redux.data)
    const gender = useSelector((state) => state.redux.gender)
    const nationality = useSelector((state) => state.redux.nationality)

    const filteredData = useFilters(data,gender,nationality) //we receive the filtered data
    dispatch(putCurrentData(filteredData)) //we put the filtered data in redux.currentdata for use in a Pagination.js
    const users = usePagination(filteredData,usersOnPage,currentPage)

    if( users.length !== 0 ) {
        return (
            <ul className='users-list'>
                {users.map((user,index) => (<li className='user' key={user.login.uuid} >
                    <div className="pass">
                        <div className="avatar">
                            <img src={user.picture.medium} className='photo' alt=''/> 
                        </div>
                        <div className="info">
                            <h3 className="full-name cell">
                                {user.name.first} {user.name.last}
                            </h3>
                            <p className="age cell">
                                {user.dob.age} years ( <Birthday user={user.dob.date}/> )
                            </p>
                            <Nationality  user={user} /> 
                        </div>
                    </div>
                    <div className='contacts'>
                        <div className="mail cell">
                            <i className='contact-icon'><AiOutlineMail/></i>
                            <p>{user.email}</p>
                        </div>
                        <div className="tel cell">
                            <i className='contact-icon'><FaPhone/></i>
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
    else {
        return <EmptyList/> 
    }
}

export default User;

