import React from 'react';
import '../LESS/mobile-buttons-panel.less';

function MobilButtonsPanel(props) {
    return <div className="mobil-buttons-panel">{props.children}</div>;
}

export default MobilButtonsPanel;
