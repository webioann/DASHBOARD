import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'

function UserFullData() {

    const oneUserId = useSelector(state => state.redux.uuid)
    const currentData = useSelector((state) => state.redux.currentData)
    const[favorit,setFavorit] = useState([])

    useEffect(() => {
        if(oneUserId !== "") {
            let raw = currentData.filter(unit => unit.login.uuid === oneUserId)
            setFavorit(raw)
        }
        else{
            setFavorit([])
        }
    },[currentData])

    console.log(`UUID => ${oneUserId}`);
    console.log(`fav-array = ${JSON.stringify(currentData.filter(unit => unit.login.uuid === oneUserId))}`)
    console.log(`fav-array222 = ${favorit[0]}`)


    if( favorit !== [] ) {
        return (
            <div>
                <p>UserFullDataId === {oneUserId}</p>
                {favorit.map(one => (
                    <li>{one.name.first}</li>
                )

                )}
            </div>
        )
    }
    else{ return null}

}

export default UserFullData;