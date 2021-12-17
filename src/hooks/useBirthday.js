import React,{useState,useEffect} from 'react'
import { multyLang } from '../data/multiLang' //object for use multi lang mode in App

const useBirthday = ( date ) => {

    const [birthday,setBirthday] = useState('')
    let dob_date = new Date(date)
    const mon = multyLang.month.eng

    let day = dob_date.getDate();
    let month = dob_date.getMonth();
    if(month === 0) {month = mon.jan}
    if(month === 1) {month = mon.feb}
    if(month === 2) {month = mon.mar}
    if(month === 3) {month = mon.apr}
    if(month === 4) {month = mon.may}
    if(month === 5) {month = mon.jun}
    if(month === 6) {month = mon.jul}
    if(month === 7) {month = mon.aug}
    if(month === 8) {month = mon.sep}
    if(month === 9) {month = mon.oct}
    if(month === 10) {month = mon.nov}
    if(month === 11) {month = mon.dec}
    let year = dob_date.getFullYear();

    setBirthday(`${day} ${month} ${year}`)

    return birthday
}
export default useBirthday;