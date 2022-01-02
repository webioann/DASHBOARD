import React,{useState,useEffect,useRef} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import './style/modalUser.css'

function UserFullInfo() {

    const dispatch = useDispatch()
    // const active = useSelector(state => state.dialect.modalVisibility) 
    // const [info,setInfo] = useState()
    const uuid = useSelector(state => state.redux.userLoginUuid)
    const users = useSelector(state => state.redux.currentData)
    // console.log(`USERS --> ${JSON.stringify(users[0].name.first)}`)
    // console.log(`UUID --> ${uuid}`)

    // useEffect(() => {
    //     if(uuid === 'uuid is empty') {
    //         console.log(uuid)
    //     }
    //     else{
    //         let raw = users.find(elem => elem.login.uuid === uuid)
    //         setInfo(raw)
    //         console.log(`RAW nat --> ${info}`)
    //     }
    // },[uuid])

    // console.log(`RAW --> ${JSON.stringify(info.gender)}`)
    
    // console.log(`RAW typeof --> ${typeof UUID}`)

    return (

        <div className='user-full-info'>
            <header className="modal-header">
                <div className="foto"></div>
                <div className="col">
                    <h3 className="name">{users[0].name.first}</h3>
                    <p className="age">45 years 7/12/1987</p>
                </div>
            </header>
            <div className="field">
                <p className="left-p">Gender:</p>
                <p className="right-p">ttt</p>
            </div>
            <div className="field">
                <p className="left-p">Nationality:</p>
                <p className="right-p"> British</p>
            </div>
            <div className="field">
                <p className="left-p">Phone:</p>
                <p className="right-p">ttt</p>
            </div>
            <div className="field">
                <p className="left-p">Emaile:</p>
                <p className="right-p">ttt</p>
            </div>
            <div className="field">
                <p className="left-p">Country:</p>
                <p className="right-p">Brasil</p>
            </div>

            <div className="field">
                <p className="left-p">Street:</p>
                <p className="right-p">9278 new road</p>
            </div>
            <div className="field">
                <p className="left-p">City:</p>
                <p className="right-p" id="big-letter">kilcoole</p> {/*the first letter is capitalized*/}
            </div>
            <div className="field">
                <p className="left-p">State:</p>
                <p className="right-p" id="big-letter">waterford</p> {/*the first letter is capitalized*/}
            </div>
            <div className="field">
                <p className="left-p">Postcode:</p>
                <p className="right-p">93027</p>
            </div>
            <div className="field">
                <p className="left-p">Username:</p>
                <p className="right-p">silverswan131</p>
            </div>
            <div className="field">
                <p className="left-p">Login:</p>
                <p className="right-p">roootookek12</p>
            </div>
            <div className="field">
                <p className="left-p">Password: </p>
                <p className="right-p">firewall</p>
            </div>

        </div>
    )

}
export default UserFullInfo;

