import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { showModal } from '../Redux/dialectSlice.js'
import { ImCross } from "react-icons/im"
import './style/userModal.css'

function UserModal() {

    const dispatch = useDispatch()
    const modalVisibility = useSelector(state => state.dialect.modalVisibility) 

    return (
        <div  className={ modalVisibility ? 'modal-container active-modal' : 'modal-container' }>
            <div className={modalVisibility ? 'modal-window active-modal-window' : 'modal-window'}>
                <header className="modal-header">
                    <div className="main-info">
                        <div className="foto"></div>
                        <div className="col">
                            <h3 className="name">Patric Newman</h3>
                            <p className="age">45 years 7/12/1987</p>
                        </div>
                    </div>
                    <i className="close-modal">
                        <ImCross onClick={() => { dispatch(showModal(false))}}/>
                    </i>
                </header>
                <div className="field">
                    <p className="left-p">Gender:</p>
                    <p className="right-p">female</p>
                </div>
                <div className="field">
                    <p className="left-p">Nationality:</p>
                    <p className="right-p"> British</p>
                </div>
                <div className="field">
                    <p className="left-p">Phone:</p>
                    <p className="right-p">(098)-456-46-14</p>
                </div>
                <div className="field">
                    <p className="left-p">Emaile:</p>
                    <p className="right-p">tyuirdfg@gmail.com</p>
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
        </div>
    )
}

export default UserModal;

