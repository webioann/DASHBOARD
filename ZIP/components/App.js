import React from 'react'
import { useSelector } from 'react-redux'
import Pagination from './Pagination.js'
import RequestSize  from './RequestSize.js'
import User from './User'
import useFetchData from '../hooks/useFetchData.js'
import ListOfNationalities from './ListOfNationalities'
import GenderButton from './GenderButton'
import { FiSettings } from "react-icons/fi"

import './app.css'


function App() {

  const requestSize = useSelector(state => state.redux.requestSize) //the size of the request to the API
  const { loading,error } = useFetchData(requestSize)




  if ( !loading && !error ) {
    return (
      <div className="container-fluid">
        <div className="container app" >
          <div className="filters p-2">
            <p className="title row mb-2">nationality filter</p>
            <ListOfNationalities/>
            <p className="title row mb-2">gender filter</p>
            <GenderButton id={'both-sex'}/>
            <GenderButton id={'male'}/>
            <GenderButton id={'female'}/>
          </div>
          <User/>
          <footer className="grid container">
            <Pagination/>
            <div className="set-icon">
              <FiSettings size='1.6rem' color='inherit'/>
            </div>
            <RequestSize/>
          </footer>
        </div> 
      </div>
    )
  }else if (loading) {
      return (
          <h1>...LOADING ...</h1>
      )
  } else if (error) {
      return (
          <h1>...ERROR ...</h1>
      )
  }

}
export default App

{/* <p className="title row mb-2">respons size</p> */}
// 