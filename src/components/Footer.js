import React from 'react';
import { useSelector } from 'react-redux';
import '../less/footer.less';

function Footer(props) {
    const themeMode = useSelector((state) => state.dialect.themeMode);

    return (
        <footer className={`footer-${themeMode}`}>
            <div className={`footer-box-${themeMode}`}>{props.children}</div>
        </footer>
    );
}

export default Footer;
