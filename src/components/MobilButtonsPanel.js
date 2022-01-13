import React from 'react'
import './style/mobileButtonsPanel.css'

function MobilButtonsPanel(props) {
    
    return (
        <div className="mobil-buttons-panel">
            {props.children}
        </div>
    )
}
export default MobilButtonsPanel;
