import { useState,useEffect } from 'react'

const useFilters = (data,gender,nationality) => {

    const[filteredData,setFilteredData] = useState([])

    useEffect(() => {
        if( gender === 'both-sex' && nationality === 'ALL') {
            setFilteredData( data )
        }
        else if( gender !== 'both-sex' && nationality === 'ALL') {
            setFilteredData( data.filter(unit => 
                unit.gender === gender
            ))
        }
        else if( gender === 'both-sex' && nationality !== 'ALL') {
            setFilteredData( data.filter(unit => 
                unit.nat === nationality 
            ))
        }
        else{
            setFilteredData( data.filter(unit => 
                unit.gender === gender && unit.nat === nationality 
            ))
        }
        
    },[data,gender,nationality])

    return filteredData
}
export default useFilters;