import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import nations from '../data/nations'

const useChartDataCreator = () => {

    const data = useSelector((state) => state.redux.data)
    const [maxValue,setMaxValue] = useState(0)
    const [fraction,setFraction] = useState('')
    const [down_nat,setDownNat] = useState([])
    const [grow_nat,setGrowNat] = useState([])

    useEffect(() => {
        let sumArray = []
        nations.map(unit => {
            let overlap = data.filter(item => item.nat === unit.code)
            let volum = overlap.length
            sumArray.push(volum)
            Object.assign(unit , { dataVolum: volum }) // assign a value to the key "dataVolum" corresponding value 
        }) 
        sumArray.sort((a,b) => a - b)
        setMaxValue(sumArray[sumArray.length -1])
        console.log(`sumArray => ${sumArray} == nations 3 ${JSON.stringify(nations[4])}`);
    },[data])

    useEffect(() => {
        setFraction( 300 / maxValue )
    },[maxValue])

    return fraction 
}
export default useChartDataCreator;
