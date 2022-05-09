import React,{ useRef,useEffect } from 'react'
import { useSelector } from "react-redux"

import ContainerFluid from '../ContainerFluid/ContainerFluid'
import MobilButtonsPanel from '../MobileButtonsPanel/MobilButtonsPanel'
import FiltersButton from '../FiltersButton/FiltersButton'
import Box from '../Box/Box'
import SideBar from '../SideBar/SideBar'
import Main from '../Main/Main'
import Users from '../Users/Users'
import NatFiltersList from '../NatFiltersList/NatFiltersList'
import LangButton from '../LangButton/LangButton'
import ChartButton from '../ChartButton/ChartButton'
import Cross from '../Cross/Cross'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import Gender_Filter from '../GenderFilter/Gender_Filter'
import Title from '../Title/Title'
import Group from '../Group/Group'
import Footer from '../Footer/Footer'
import RequestSize from '../RequestSize/RequestSize'
import Modal from '../Modal/Modal'
import Modal_for_chart from '../Modal/Modal_for_chart'
import Modal_for_user from '../Modal/Modal_for_user'
import Histogram from '../Histogram/Histogram'
import Pagination from '../Pagination/Pagination'
import Chart_Container from '../Chart_Container/Chart_Container'
import RangeBox from '../RangeBox/RangeBox'
import UserFullData from '../UserFullData/UserFullData'

// ===== Hooks and others =====
import useFetchData from '../../hooks/useFetchData.js'
import usePageCutter from '../../hooks/usePageCutter.js'
import useFilters from '../../hooks/useFilters.js'
import useButtonCreator from "../../hooks/useButtonCreator"
import { title_nat_filters,title_gender_filters } from '../../data/multiLang'

function App() {

  // --- it is RENDER COUNTER function
  const newRender = useRef(1)
  useEffect(() => {
    newRender.current++
    console.log(`RENDER --> ${newRender.current} times`)
  })
  //---------------------------------------------

  // ===== CUSTOM HOOKS CALL PLACE ================
  const fff = useFilters() //we receive the filtered data
  const sss = usePageCutter() //slicing data for one page
  const { pageNumberArray } = useButtonCreator()
  const { loading,error } = useFetchData()
  //-----------------------------------------------

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
              <ChartButton/> 
              <Cross/>
            </Group>
            <Group flexDir={'col'}>
              <Title text={title_nat_filters}/>
              <NatFiltersList />
            </Group>
            <Group flexDir={'col'}>
              <Title text={title_gender_filters}/>
              <Gender_Filter type={'both-sex'}/>
              <Gender_Filter type={'female'}/>
              <Gender_Filter type={'male'}/>
            </Group>
          </SideBar>
          <Main>
            <Users/>
          </Main>
        </Box>
        <Footer>
          <Pagination pageNumberArray={pageNumberArray}/>
          <RequestSize/>
        </Footer>

        {/* <Modal>
          { chart 
            ? <Chart_Container>
                <Histogram/>
                <RangeBox/>
              </Chart_Container>
            : <UserFullData/>
          }
        </Modal> */}
        <Modal_for_chart>
          <Chart_Container>
            <Histogram/>
            <RangeBox/>
          </Chart_Container>
        </Modal_for_chart>

        <Modal_for_user>
          <UserFullData/>
        </Modal_for_user>

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

