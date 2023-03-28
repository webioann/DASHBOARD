import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { lightMode, darkMode } from '../Redux/dialectSlice';
import { FaMoon, FaRegSun } from 'react-icons/fa';
import '../LESS/theme-toggle.less';

function ThemeToggle() {
    const dispatch = useDispatch();
    const themeMode = useSelector((state) => state.dialect.themeMode);

    const switchThemeMode = () => {
        themeMode === 'light' ? dispatch(darkMode()) : dispatch(lightMode());
    };

    return (
        <div
            className={`theme-switcher-${themeMode}`}
            onClick={switchThemeMode}
        >
            {themeMode === 'light' ? (
                <FaMoon className={`lang-icon-${themeMode}`} />
            ) : (
                <FaRegSun className={`lang-icon-${themeMode}`} />
            )}
        </div>
    );
}

export default ThemeToggle;
