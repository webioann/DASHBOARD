import React from 'react';
import '../less/main.less';

function Main(props) {
    return <div className="main">{props.children}</div>;
}

export default Main;
