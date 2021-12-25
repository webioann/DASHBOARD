import { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { putFilteredData } from '../Redux/paginSlice'
import nations from '../data/nations'

const useChartDataCreator = () => {

    const data = useSelector((state) => state.redux.data)
    const [chartData,setChartData] = useState([])

    nations.map(unit => {
        let overlap = data.filter(item => item.nat === unit.code)
        let volum = overlap.length
        console.log(`VOLUM --> ${volum}`)
        Object.assign( unit , { dataVolum: volum } )
    })

    return chartData
}
export default useChartDataCreator;

// setFilteredData( data.filter(item => item.code === unit.code))
