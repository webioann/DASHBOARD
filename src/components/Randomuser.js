import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from "react-redux";
import {femaleAction,maleAction,allSexAction} from '../REDUX/Reducers/genderReducer.js'


import Birthday from './Birthday.js'
import Location from './Location.js'
import Nationality from './Nationality.js'
import { FaPhone} from 'react-icons/fa';
import { AiOutlineMail } from "react-icons/ai";

import './app.scss'

import Select from './Select.js';
import GenderSort from './GenderSort.js'
import Restarter from './Restarter.js'
import SortByNationality from './SortByNationality.js'

function Randomuser() {
    const gender = useSelector(state => state.gender.gender)
    const paginat = useSelector(state => state.paginator.paginat)
    const natio = useSelector(state => state.natio.natio)

    const[isLoad,setisLoad] = useState(true);
    const[isError,setisError] = useState(false);
    const[data,setData] = useState([]);

    let URL = `https://randomuser.me/api/?page=1&results=${paginat}&nat=${natio}&gender=${gender}`;

    const useContacts = () => {
        useEffect(() => {
                const getContacts = async () => {
                    try {
                        const response = await fetch(URL)
                        const {results,error} = await response.json();
                        if (error) {
                            throw new Error(error);
                        }
                        setData(results);
                        setisError(false);
                    }
                    catch (error) { setisError(true); console.log('ERROR') }
                    finally {setisLoad(false);}
                }
                getContacts();
                
            }
        ,[gender,natio,paginat]);
        return {data, isLoad, isError }
    }
    
    const contacts = useContacts();
    const user = contacts.data;
    
    if (!contacts.isLoad && !contacts.isError){

    return (
        <div className='random-users row p-3 '>

            <div className='sort-panel row p-2 mb-2'> 
                <div className="col-lg-6"><GenderSort/></div>
                <div className="col-6 col-sm-5 col-md-4 col-lg-2"><SortByNationality/></div>
                <div className="col-6 col-sm-4 col-md-4 col-lg-3"><Select/></div>
                <div className="col-sm-3 col-md-4 col-lg-1"><Restarter/></div>
            </div>

            <ul className='users-list row'>
                {user.map((user) => (<li className='user row p-2' key={user.login.uuid} >

                    <div className='col-md-4 col-lg-3 fullname'> 
                        <div className="row">
                            <div className="col-auto">
                                

                                <div className='photo'> </div>

                            </div>
                            <div className="col">
                                <div className="name">{user.name.first} {user.name.last}</div>
                                <Nationality user={user}/> 
                            </div>
                        </div>
                    </div>

                    <div className="birthday col-md-3 col-lg-2 pl-2">
                        <Birthday user={user}/>
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
                        <Location user={user}/>
                    </div>
                    
                </li>))}
            </ul> 

        </div>

    )
    }else if (contacts.isLoad) {
        return (
            <h1>...LOADING ...</h1>
        )
    } else if (contacts.isError) {
        return (
            <h1>...ERROR ...</h1>
        )
    }
}    
export default Randomuser;

