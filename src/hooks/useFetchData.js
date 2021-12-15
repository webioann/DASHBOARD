import { useEffect,useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchData } from '../Redux/reduxSlice'

const useFetchData = (requestSize) => {

    const dispatch = useDispatch()
    const[loading,setLoader] = useState(true)
    const[error,setErrors] = useState(false)
    let url = `https://randomuser.me/api/?page=1&results=${requestSize}`

    useEffect(() => {
        fetch( url )
        .then((response) => response.json())
        .then(({results}) => {
            dispatch(fetchData(results)) //put data in storage redux.data        
            setErrors(false)
            setLoader(false)
        })
        .catch ((error) => { 
            setErrors(true)
            console.error('ERROR',error) })
        .finally(() => {setLoader(false)})

    },[ url ])

    return { loading, error }
}
export default useFetchData;
// dispatch(fetchData(results)) //put results in redux state data
// localStorage.setItem('LOCAL_DATA',JSON.stringify(results)) //put results in localStorage
