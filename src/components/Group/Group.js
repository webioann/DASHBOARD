import React from 'react'
import { useSelector } from "react-redux"
import './group.less'

function Group (props) {

    const themeMode = useSelector(state => state.dialect.themeMode)

    if(props.flexDir === 'col') {
        return (
            <div className={`grop-${themeMode}`}
                style={{flexDirection: 'column'}}>
                { props.children }
            </div>
        )
    }
    else{
        return (
            <div className={`grop-${themeMode}`}
                style={{flexDirection: 'row'}}>
                { props.children }
            </div>
        )
    }
}
export default Group;
