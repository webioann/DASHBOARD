import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { putCurrentData } from '../Redux-toolkit/reduxSlice'
import usePagination from '../hooks/usePagination.js'
import useFilters from '../hooks/useFilters.js'
import Birthday from './Birthday'
import Nationality from './Nationality.js'
import { FaPhone} from 'react-icons/fa'
import { AiOutlineMail } from "react-icons/ai"
import './user.scss'

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

    return (
        <ul className='users-list py-3 row'>
            {users.map((user,index) => (<li className='user row p-2' key={user.login.uuid} >
                <div className='col-md-4 col-lg-3 fullname'> 
                    <div className="row">
                        <div className="col-auto">
                            <img src={user.picture.medium} className='photo' alt=''/> 
                        </div>
                        <div className="col">
                            <h5 className="name">{user.name.first} {user.name.last}</h5>
                            <Nationality user={user} /> 
                        </div>
                    </div>
                </div>
                <div className="birthday col-md-3 col-lg-2 pl-2">
                    <div className="birth row">
                        <div className="col-5 col-md-12">{user.dob.age} years.</div>
                        <Birthday user={user.dob.date}/>
                    </div>
                </div>
                <div className='contact col-md-5 col-lg-4 pl-2'>
                    <div className="row">
                        <div className="tel col-1"> <FaPhone /> </div>
                        <p className="col-11">{user.phone}</p>
                        <div className="mail col-1"> <AiOutlineMail/> </div>
                        <p className="col-11">{user.email}</p>
                    </div>
                </div>
                <div className="location col-md-12 col-lg-3 pl-2">
                    <div>
                        <span > / {user.location.country} /</span>
                        <span>{user.location.street.number},{user.location.street.name} street,</span>
                        <span>{user.location.city},{user.location.state}.</span>
                    </div>
                </div>
                
            </li>))}
        </ul> 
    )
}

export default User;

