import React from 'react';
import '../less/box.less';

function Box(props) {
    return <div className="box">{props.children}</div>;
}

export default Box;
