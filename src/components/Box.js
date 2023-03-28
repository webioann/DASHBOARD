import React from 'react';
import '../LESS/box.less';

function Box(props) {
    return <div className="box">{props.children}</div>;
}

export default Box;
