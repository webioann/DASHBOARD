import { useState,useEffect } from 'react'
import { useSelector } from "react-redux"
import nations from "../data/nations"

const  useGetNationality = ( code ) => {

    const lang = useSelector((state) => state.dialect.lang)
    const [nationality,setNat] = useState('all')

    useEffect(() => {
        let currentNation = nations.find(nation => nation.code === code)
        lang === 'eng'
        ? setNat(currentNation.nameEng)
        : setNat(currentNation.nameRus)
    },[lang])

    return nationality
}
export default useGetNationality;