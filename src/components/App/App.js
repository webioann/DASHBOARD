import React from 'react'
import ContainerFluid from '../ContainerFluid/ContainerFluid'
import MobilButtonsPanel from '../MobileButtonsPanel/MobilButtonsPanel'
import FiltersButton from '../FiltersButton/FiltersButton'
import Box from '../Box/Box'
import SideBar from '../SideBar/SideBar'
import Main from '../Main/Main'
import Users from '../Users/Users'
import NatFiltersList from '../NatFiltersList/NatFiltersList'
import LangButton from '../LangButton/LangButton'
import ShowCharts from '../ShowCharts/ShowCharts'
import Cross from '../Cross/Cross'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import Gender_Filter from '../GenderFilter/Gender_Filter'
import Group from '../Group/Group'
import Footer from '../Footer/Footer'
import RequestSize from '../RequestSize/RequestSize'
import Pagination from '../Pagination/Pagination'
// ===== Hooks and others =====
import useFetchData from '../../hooks/useFetchData.js'
import useFilters from '../../hooks/useFilters.js'

function App() {

  useFilters() //we receive the filtered data
  const { loading, error } = useFetchData()

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
              {/* <ShowCharts/>  */}
              <Cross/>
            </Group>
            <Group flexDir={'col'}>
              <NatFiltersList />
            </Group>
            <Group flexDir={'col'}>
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

