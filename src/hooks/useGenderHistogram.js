import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'

const useGenderHistogram = () => {

    const data = useSelector((state) => state.redux.data)
    const dataVolum = data.length
    const [totalMen,setTotalMen]  = useState('')
    const [totalWomen,setTotalWomen] = useState('')

    useEffect(() => {
        const M = data.filter(item => item.gender === 'male')
        const MEN = M.length
        const W = data.filter(item => item.gender === 'female')
        const WOMEN = W.length
        let onePercentage = dataVolum / 100
        let RAW = Math.round(MEN / onePercentage)
        setTotalMen( RAW )
        setTotalWomen( 100 - RAW )
    },[data])

    return { totalMen,totalWomen }
}

export default useGenderHistogram;
