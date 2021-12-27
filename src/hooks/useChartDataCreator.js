import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import nations from '../data/nations'

const useChartDataCreator = () => {

    const data = useSelector((state) => state.redux.data)
    const [totalMen,setTotalMen] = useState('')
    const [totalWomen,setTotalWomen] = useState('')

    useEffect(() => {
        nations.map(unit => {
            let overlap = data.filter(item => item.nat === unit.code)
            let volum = overlap.length
            Object.assign( unit , { dataVolum: volum } )
        }) 
        const rawMen = data.filter(item => item.gender === 'male')
        const rawWomen = data.filter(item => item.gender === 'female')
        setTotalMen(rawMen.length)
        setTotalWomen(rawWomen.length)
    },[data])

    return { totalMen,totalWomen }
}
export default useChartDataCreator;
