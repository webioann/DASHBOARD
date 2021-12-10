import React from 'react'
import './app.scss'

function Birthday(props) {

    const user = props.user;
    let birthday = '';
    function time () {
        let dd = new Date(user.dob.date);

            let day = dd.getDate();
            let month = dd.getMonth();
            if(month === 0) {month = 'Jan'}
            if(month === 1) {month = 'Feb'}
            if(month === 2) {month = 'Mar'}
            if(month === 3) {month = 'Apr'}
            if(month === 4) {month = 'May'}
            if(month === 5) {month = 'Jun'}
            if(month === 6) {month = 'Jul'}
            if(month === 7) {month = 'Aug'}
            if(month === 8) {month = 'Sept'}
            if(month === 9) {month = 'Oct'}
            if(month === 10) {month = 'Nov'}
            if(month === 11) {month = 'Dec'}
            let year = dd.getFullYear();
        birthday = `${day} ${month} ${year}`;
    }
    time();
    return (
        <div className="birth row">
            <div className="col-5 col-md-12">{user.dob.age} years.</div>
            <div className="col-7 col-md-12">{birthday}</div>
        </div>
    )
}
export default Birthday;