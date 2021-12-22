import React,{useEffect} from 'react'
import ContainerFluid from './ContainerFluid'
import Box from './Box'
import SideBar from './SideBar'
import Main from './Main'
import User from './User'
import Burger from './Burger'
import NatFilterList from './NatFilterList'
import LangButton from './LangButton'
import Cross from './Cross'
import ThemeToggle from './ThemeToggle'
import GenderFilterBoth from './GenderFilterBoth'
import GenderFilterFemale from './GenderFilterFemale'
import GenderFilterMale from './GenderFilterMale'
import Title from './Title'
import Group from './Group'
import Footer from './Footer'
import Pagination from './Pagination'
import RequestSize from './RequestSize'
import ModalUser from './ModalUser'
import useFetchData from '../hooks/useFetchData.js'
import { useSelector } from "react-redux"
import { title_nat_filters,title_gender_filters } from '../data/multiLang'

function App() {
  
  const requestSize = useSelector(state => state.pagin.requestSize) //the size of the request to the API
  const { loading,error } = useFetchData(requestSize)

  if ( !loading && !error ) {
    return (
      <ContainerFluid>
        <ModalUser/>
        <Box>
          <SideBar>
          <Group >
                <LangButton/>
                <ThemeToggle/>
                <Cross/>
            </Group>
            <Group flexDir={'col'}>
                <Title text={title_nat_filters}/>
                <NatFilterList />
            </Group>
            <Group flexDir={'col'}>
                <Title text={title_gender_filters}/>
                <GenderFilterBoth/>
                <GenderFilterFemale/>
                <GenderFilterMale/>
            </Group>
          </SideBar>
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

