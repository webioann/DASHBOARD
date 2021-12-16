import React,{ useState,useEffect } from 'react'
import { useSelector } from "react-redux"
import { multyLang } from '../data/multiLang'

function Group (props) {

    let id = props.id
    console.log(`ZZZZ --${id}`)
    const themeMode = useSelector(state => state.dialect.themeMode)
    const lang = useSelector((state) => state.dialect.lang)

    { lang === 'eng' ? 'nationality filters' : 'фильтрация по национальности'}

    return (
        <div className={`button-grop-${themeMode}`}>
            <p className="title"> SubTitle </p> 
            { props.children }
        </div>
    )

}
export default Group;
    // useEffect(() => {
        // switch( id ) {
        //     case id === 'nat':
        //         setEngText(multyLang.natSubTitle.eng);
        //         setRusText(multyLang.natSubTitle.rus);
        //         break;
        //     case id === 'gender':
        //         setEngText(multyLang.genderSubTitle.eng);
        //         setRusText(multyLang.genderSubTitle.rus);
        //         break;
        //     default:
        //         console.warn(`id for SubTitlt.js not install`);
        //     break;
        // }
    // },[])
    
    // const styles = {
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     marginBottom: '10px',
    // }
