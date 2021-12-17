import { useState,useEffect } from "react"
import { useSelector } from "react-redux"

const useTranslator = ( multyLangKey ) => {

    const lang = useSelector((state) => state.dialect.lang)
    const [translation,setTranslation] = useState('')

    useEffect(() => {
        lang === 'eng' 
        ? setTranslation(multyLangKey.eng) 
        : setTranslation(multyLangKey.rus) 
    },[lang])

    return translation
}
export default useTranslator;
