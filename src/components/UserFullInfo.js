import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import "./style/userFullInfo.css";

function UserFullInfo() {
    const uuid = useSelector((state) => state.redux.userLoginUuid);
    const users = useSelector((state) => state.redux.currentData);

    // console.log(`USERS --> ${JSON.stringify(users[0].name.first)}`);
    // console.log(`UUID --> ${uuid}`);

    const [choosed, setChoosed] = useState(false);
    const [user, setUser] = useState([]);

    useEffect(() => {
        if (uuid === "uuid is empty") {
            console.log(uuid);
        } else {
            let raw = users.find(elem => elem.login.uuid === uuid)
            setUser(raw)
            console.log(`RAW --> ${JSON.stringify(raw)}`);
            setChoosed(true)
        }
    }, [uuid])

    console.log(`USER --> ${JSON.stringify(user)}`)

    // console.log(`RAW --> ${JSON.stringify(user.name)}`);
    // console.log(`USER NAT --> ${user.nat}`);

    // console.log(`RAW typeof --> ${typeof UUID}`)

    if (choosed) {
        return (
            <div className="user-full-info">
                <header className="modal-header">
                    <div className="avatar">
                        <img
                            src={user.picture.medium}
                            className="photo"
                            alt=""
                        />
                    </div>
                    <div className="col">
                        <h3 className="name">
                            {user.name.first} {user.name.last}
                        </h3>
                        <p className="age">45 years 7/12/1987</p>
                    </div>
                </header>
                <div className="field">
                    <p className="left-p">Gender: </p>
                    <p className="right-p">{user.gender}</p>
                </div>
                <div className="field">
                    <p className="left-p">Nationality:</p>
                    <p className="right-p"> {user.nat}</p>
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
