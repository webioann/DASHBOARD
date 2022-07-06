import React, { useState } from 'react'
import ContainerFluid from './ContainerFluid'
import MobilButtonsPanel from './MobilButtonsPanel'
import FiltersButton from './FiltersButton'
import Box from './Box'
import SideBar from './SideBar'
import Main from './Main'
import Users from './Users'
import NatFiltersList from './NatFiltersList'
import LangButton from './LangButton'
import ShowCharts from './ShowCharts'
import Cross from './Cross'
import ThemeToggle from './ThemeToggle'
import Gender_Filter from './GenderFilter'
import Group from './Group'
import Footer from './Footer'
import RequestSize from './RequestSize'
import Pagination from './Pagination'
import Modal from './Modal'
import TopChartsPanel from './TopChartsPanel'
import { useSelector, useDispatch } from "react-redux"

import RangeBox from './RangeBox'
import Histogram from './Histogram'


// ===== Hooks and others =====
import useFetchData from '../hooks/useFetchData.js'
import useFilters from '../hooks/useFilters.js'

function App() {

  useFilters() //we receive the filtered data
  const { loading, error } = useFetchData()
  const modal = useSelector(state => state.dialect.chartsModal)
  // const [modal,setModal] = useState(false)

  // const closeModal = () => {
  //     setModal(false)
  // }


  if ( !loading && !error ) {
    return (
      <ContainerFluid>
        <MobilButtonsPanel>
          <FiltersButton/>
        </MobilButtonsPanel>
        <Box>
          <SideBar>
            <Group >
              <LangButton/>
              <ThemeToggle/>
              <ShowCharts/> 
              <Cross/>
            </Group>
            <Group flexDir={'col'}>
              <NatFiltersList />
            </Group>
            <Group flexDir={'col'}>
              <Gender_Filter buttonId={'both-sex'}/>
              <Gender_Filter buttonId={'female'}/>
              <Gender_Filter buttonId={'male'}/>
            </Group>
          </SideBar>
          <Main>
            <Users/>
          </Main>
          {modal ? (
            <Modal>
              <TopChartsPanel/>
              <Histogram/>
              <RangeBox/>
            </Modal>) 
            : null
          }
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

