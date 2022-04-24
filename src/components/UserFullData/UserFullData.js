import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'

function UserFullData() {

    const oneUserId = useSelector(state => state.redux.uuid)
    const currentData = useSelector((state) => state.redux.currentData)
    const[favorit,setFavorit] = useState([])

    useEffect(() => {
        if(oneUserId !== "") {
            setFavorit(currentData.filter(unit => unit.login.uuid === oneUserId))
        }
        else{
            setFavorit([])
        }
    },[currentData])

    console.log(`UUID => ${oneUserId}`);

    if( oneUserId !== "" ) {
        return (
            <div>
                UserFullDataId === {oneUserId}
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