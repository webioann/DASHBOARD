import React from 'react'
import ContainerFluid from './ContainerFluid'
import Box from './Box'
import SideBar from './SideBar'
import Main from './Main'
import User from './User'
import Burger from './Burger'

import Footer from './Footer'
import Pagination from './Pagination'
import RequestSize from './RequestSize'
import useFetchData from '../hooks/useFetchData.js'
import { useSelector } from "react-redux"

function App() {
  
  const requestSize = useSelector(state => state.pagin.requestSize) //the size of the request to the API
  const { loading,error } = useFetchData(requestSize)

  if ( !loading && !error ) {
    return (
      <ContainerFluid>
        <Box>
          <SideBar />
          <Main>
            <Burger/>
            <User/>
          </Main>
        </Box>
        <Footer>
          <Pagination/>
          <RequestSize/>
        </Footer>
      </ContainerFluid>
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

