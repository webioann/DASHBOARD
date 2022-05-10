import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import nations from '../data/nations'

const useChartDataCreator = () => {

    const data = useSelector((state) => state.redux.data)
    const activefilter = useSelector((state) => state.filter.sort_by)
    const [array,setArray] = useState([])
    const [maxValue,setMaxValue] = useState(0)
    const [fraction,setFraction] = useState('')

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
    },[data])

    useEffect(() => {
        setFraction( 300 / maxValue ) 
    },[maxValue])

    useEffect(() => {
        if(activefilter === 'sort random') {
            let rand = nations.sort((a,b) => {
                if(a.code < b.code) {
                    return -1
                }
            })
            setArray([...rand])
        }
        if(activefilter === 'sort up') {
            let wer = nations.sort((a,b) => {
                if(a.dataVolum > b.dataVolum) {
                    return -1
                }
            })
            setArray([...wer])
        }
        if(activefilter === 'sort down') {
            let raw = nations.sort((a,b) => {
                if(a.dataVolum < b.dataVolum) {
                    return -1
                }
            })
            setArray([...raw])
        }
    },[activefilter,data])


    return { fraction,array }
}
export default useChartDataCreator;
