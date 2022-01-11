import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import nations from "../data/nations";

import { random } from "../data/random";
import "./style/userFullInfo.css";

function UserFullInfo() {
    // const fullInfo = useSelector((state) => state.redux.userFullData);
    const uuid = useSelector((state) => state.redux.uuid);
    const currentData = useSelector(state => state.redux.currentData)

    const [choosed, setChoosed] = useState(false);
    const [user, setUser] = useState([]);
    const [userr, setUserr] = useState([]);

    const [nat,setNat] = useState('')

    useEffect(() => {
        // setUserr(fullInfo)
        if( uuid === 'uuid is empty' ) {
            setUserr(uuid);
        }
        else{
            let raw = currentData.filter(item => item.login.uuid === uuid)
            setUserr(raw);
            // console.log(`USERR --> ${userr.name.last}`);
            console.log(`USERRRRR --> ${JSON.stringify(userr[0].name)}`);
            // console.log(`USERRRRRrrrrrrrrrrrrr --> ${userr[0].name.last}`);

        }
        setUser(random)
        setChoosed(true)
        let natio = nations.find(nation => nation.code === random.nat)
        setNat(natio.nameEng)
    }, [uuid])

    if (choosed) {
        return (
            <div className="user-full-info">
                <header className="user-header">
                    <div className="user-avatar">
                        <img
                            src={user.picture.medium}
                            className="user-photo"
                            alt=""
                        />
                    </div>
                    <div className="passport">
                        <h2 className="name">
                            {user.name.first} {user.name.last}
                        </h2>
                        <p className="age">{user.dob.age} years ( {new Date(user.dob.date).toLocaleDateString()} )</p>
                    </div>
                </header>
                <div className="field">
                    <p className="left-p">Gender: </p>
                    <p className="right-p">{user.gender}</p>
                </div>
                <div className="field">
                    <p className="left-p">Nationality:</p>
                    <p className="right-p">
                        {nat}
                    </p>
                </div>
                <div className="field">
                    <p className="left-p">Phone:</p>
                    <p className="right-p">{user.phone}</p>
                </div>
                <div className="field">
                    <p className="left-p">Email:</p>
                    <p className="right-p">{user.email}</p>
                </div>
                <div className="field">
                    <p className="left-p">Country:</p>
                    <p className="right-p">{user.location.country}</p>
                </div>
                <div className="field">
                    <p className="left-p">Street:</p>
                    <p className="right-p">{user.location.street}</p>
                </div>
                <div className="field">
                    <p className="left-p">City:</p>
                    <p className="right-p" id="big-letter">
                        {user.location.city}
                    </p>
                    {/*the first letter is capitalized*/}
                </div>
                <div className="field">
                    <p className="left-p">State:</p>
                    <p className="right-p" id="big-letter">
                        {user.location.state}
                    </p>{" "}
                    {/*the first letter is capitalized*/}
                </div>
                <div className="field">
                    <p className="left-p">Postcode:</p>
                    <p className="right-p">{user.location.postcode}</p>
                </div>
                <div className="field">
                    <p className="left-p">Username:</p>
                    <p className="right-p">{user.login.username}</p>
                </div>
                <div className="field">
                    <p className="left-p">Login:</p>
                    <p className="right-p">roootookek12</p>
                </div>
                <div className="field">
                    <p className="left-p">Password: </p>
                    <p className="right-p">{user.login.password}</p>
                </div>
            </div>
        );
    } else {
        return <h1>USER IS NOT CHOSEN</h1>;
    }
}
export default UserFullInfo;



