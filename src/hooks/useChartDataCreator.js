import { useState } from 'react'
import { useSelector } from 'react-redux'
import nations from '../data/nations'

const useChartDataCreator = () => {

    const data = useSelector((state) => state.redux.data)
    const [chartData,setChartData] = useState([])

    nations.map(unit => {
        let overlap = data.filter(item => item.nat === unit.code)
        let volum = overlap.length
        Object.assign( unit , { dataVolum: volum } )
    })

    return chartData
}
export default useChartDataCreator;
