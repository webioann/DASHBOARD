import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'

function UserFullData() {

    const oneUserId = useSelector(state => state.redux.uuid)
    const currentData = useSelector((state) => state.redux.currentData)
    const[favorit,setFavorit] = useState("start")

    useEffect(() => {
        setFavorit(currentData.filter(unit => unit.login.uuid === oneUserId))
    },[oneUserId])

    // console.log(`UUID => ${oneUserId}`);
    // console.log(`fav-array = ${JSON.stringify(currentData.filter(unit => unit.login.uuid === oneUserId))}`)
    console.log(favorit)


    if( favorit !== "start") {
        return (
            <div>
                {favorit.map(user => (
                    <p key={user.login.uuid}>
                        {user.gender}{user.dob.age}
                    </p>
                ))}
                <p>UserFullDataId === {oneUserId}</p>
                {/* {favorit[0].gender} */}
            </div>
        )
    }
    else{ 
        return (
            <div>
                <p>UserFullDataId === {oneUserId}</p>
        </div>
        )
    }

}

export default UserFullData;