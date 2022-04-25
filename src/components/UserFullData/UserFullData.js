import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'

function UserFullData() {

    const oneUserId = useSelector(state => state.redux.uuid)
    const data = useSelector((state) => state.redux.data)
    const[favorit,setFavorit] = useState(data.filter(unit => unit.login.uuid === oneUserId))


    console.log(`UUID => ${oneUserId}`);
    console.log(`fav-array = ${JSON.stringify(data.filter(unit => unit.login.uuid === oneUserId))}`)
    console.log(favorit)


    if( favorit ) {
        return (
            <div>
                <p>UserFullDataId === {oneUserId}</p>

            </div>
        )
    }
    else{ return null}

}

export default UserFullData;