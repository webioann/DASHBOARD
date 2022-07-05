import React from 'react'
import { useSelector} from 'react-redux'
import useTranslator from '../hooks/useTranslator'
import { emptyList } from '../data/textContent'
import '../CSS/user-null.less'

function UserNull() {
    
    const themeMode = useSelector(state => state.dialect.themeMode)

    return (
        <div className={`empty-list-${themeMode}`}>
            <h3 className="massege">
                {useTranslator(emptyList)}
            </h3>
        </div>
    )
}

export default UserNull;

