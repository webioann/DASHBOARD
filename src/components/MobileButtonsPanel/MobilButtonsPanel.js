import React from 'react'
import './mobile-buttons-panel.css'

function MobilButtonsPanel(props) {
    
    return (
        <div className="mobil-buttons-panel">
            {props.children}
        </div>
    )
}
export default MobilButtonsPanel;
