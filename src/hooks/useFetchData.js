import { useEffect,useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetchData } from '../redux/reduxSlice'
import { putFilteredData } from '../redux/reduxSlice'

const useFetchData = () => {
    // function to fetch main data with one changeable option -  requestSize(50, 180, or 543 users)
    const dispatch = useDispatch()
    const requestSize = useSelector(state => state.redux.requestSize) //the size of the request to the API
    const[loading,setLoader] = useState(true)
    const[error,setErrors] = useState(false)
    let url = `https://randomuser.me/api/1.4/?page=1&results=${requestSize}`

    useEffect(() => {
        fetch( url )
        .then((response) => response.json())
        .then(({results}) => {
            dispatch(fetchData(results))
            dispatch(putFilteredData(results)) //put data in storage redux.data        
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
