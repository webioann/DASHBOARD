import React,{ useRef,useEffect } from 'react'
import ContainerFluid from './ContainerFluid'
import MobilButtonsPanel from './MobilButtonsPanel'
import FiltersButton from './FiltersButton'
import Box from './Box'
import SideBar from './SideBar'
import Main from './Main'
import User from './User'
import NatFilterList from './NatFilterList'
import LangButton from './LangButton'
import ChartButton from './ChartButton'
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
import Modal from './Modal/Modal'
import Histogram from './Histogram/Histogram'
// import UserFullInfo from './UserFullInfo'
// ===== Hooks and others =====
import useFetchData from '../hooks/useFetchData.js'
import usePageCutter from '../hooks/usePageCutter.js'
import useFilters from '../hooks/useFilters.js'
import { title_nat_filters,title_gender_filters } from '../data/multiLang'


function App() {
  
  // --- it is RENDER COUNTER function
  const newRender = useRef(1)
  useEffect(() => {
    newRender.current++
    console.log(`RENDER --> ${newRender.current} times`)
  })
  //------

  // ===== CUSTOM HOOKS CALL PLACE ================
  const fff = useFilters() //we receive the filtered data
  const sss = usePageCutter() //slicing data for one page
  const { loading,error } = useFetchData()

  if ( !loading && !error ) {
    return (
      <ContainerFluid>
        <MobilButtonsPanel>
          <FiltersButton/>
        </MobilButtonsPanel>
        <Modal>
          {/* <UserFullInfo/> */}
          <Histogram/>
        </Modal>
        <Box>
          <SideBar>
          <Group >
                <LangButton/>
                <ThemeToggle/>
                <ChartButton/> 
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

