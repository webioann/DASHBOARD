import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import nations from '../data/nations'

const useArrayOfNations = () => {

    const data = useSelector((state) => state.redux.data)
    const activefilter = useSelector((state) => state.filter.sort_by)
    const [array,setArray] = useState([])

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

    return array
}
export default useArrayOfNations;
