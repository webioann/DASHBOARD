import { useEffect,useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetchData } from '../Redux/reduxSlice'

const useFetchData = () => {

    const dispatch = useDispatch()
    const requestSize = useSelector(state => state.redux.requestSize) //the size of the request to the API
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
