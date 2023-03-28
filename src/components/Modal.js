import React from 'react';
import '../LESS/modal.less';

function Modal({ children }) {
    return (
        <div className="modal-container">
            <div className="modal-window">{children}</div>
        </div>
    );
}
export default Modal;
