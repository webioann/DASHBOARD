import React from 'react';
import nations from '../data/nations';
import { useDispatch, useSelector } from 'react-redux';
import { getNatId } from '../Redux/reduxSlice';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
import '../LESS/nat-filter-list.less';

function NatFiltersList() {
    const dispatch = useDispatch();
    const currentNationality = useSelector((state) => state.redux.nationality);
    const themeMode = useSelector((state) => state.dialect.themeMode);
    const lang = useSelector((state) => state.dialect.lang);

    return (
        <ul className="list">
            {nations.map((nation) => (
                <li
                    className={
                        currentNationality === nation.code
                            ? `nat-${themeMode} active-${themeMode}`
                            : `nat-${themeMode}`
                    }
                    key={nation.code}
                    onClick={() => {
                        dispatch(getNatId(nation.code));
                    }}
                >
                    <i className={`checkbox-${themeMode}`}>
                        {currentNationality === nation.code ? (
                            <ImCheckboxChecked />
                        ) : (
                            <ImCheckboxUnchecked />
                        )}
                    </i>
                    {lang === 'eng' ? nation.nameEng : nation.nameUkr}
                </li>
            ))}
        </ul>
    );
}

export default NatFiltersList;
