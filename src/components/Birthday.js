import React,{useState,useEffect} from 'react'
import { lang } from '../data/multiLang' //object for use multi lang mode in App


function Birthday(props) {
    
    const userDobDate = props.user
    const [birthday,setBirthday] = useState('')
    let dd = new Date(userDobDate)
    const mon = lang.eng.month

    let day = dd.getDate();
    let month = dd.getMonth();
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
    let year = dd.getFullYear();

    useEffect(() => {
        setBirthday(`${day} ${month} ${year}`)
    },[])

    
    return (
        <div>
            {birthday}
        </div>
    )
}
export default Birthday

