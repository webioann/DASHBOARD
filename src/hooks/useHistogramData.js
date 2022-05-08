import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import nations from '../data/nations'

const useChartDataCreator = () => {

    const data = useSelector((state) => state.redux.data)
    const [maxValue,setMaxValue] = useState(0)
    const [fraction,setFraction] = useState('')

    useEffect(() => {
        let sumArray = []
        nations.map(unit => {
            let overlap = data.filter(item => item.nat === unit.code)
            let volum = overlap.length
            sumArray.push(volum)
            Object.assign( unit , { dataVolum: volum } )
        }) 
        sumArray.sort((a,b) => a - b)
        setMaxValue(sumArray[sumArray.length -1])
    },[data])

    useEffect(() => {setFraction( 300 / maxValue)},[maxValue])

    return fraction 
}
export default useChartDataCreator;
