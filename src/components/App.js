import React from 'react'
import SideBar from './SideBar'
import Main from './Main'
import Footer from './Footer'
import useFetchData from '../hooks/useFetchData.js'
import { useSelector } from "react-redux"

import './appGlobal.css'
import './app.css'

function App() {
  
  const requestSize = useSelector(state => state.redux.requestSize) //the size of the request to the API
  const { loading,error } = useFetchData(requestSize)

  if ( !loading && !error ) {
    return (
      <div className="container app" >
        <div className="wrapper">
          <SideBar />
          <Main />
        </div>
        <Footer />
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

export default App;

