import React from 'react';
import '../less/modal.less';

function Modal({ children }) {
    return (
        <div className="modal-container">
            <div className="modal-window">{children}</div>
        </div>
    );
}
export default Modal;
