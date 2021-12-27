import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import nations from '../data/nations'

const useChartDataCreator = () => {

    const data = useSelector((state) => state.redux.data)

    useEffect(() => {
        nations.map(unit => {
            let overlap = data.filter(item => item.nat === unit.code)
            let volum = overlap.length
            Object.assign( unit , { dataVolum: volum } )
        }) 
    },[data])

    return null
}
export default useChartDataCreator;
