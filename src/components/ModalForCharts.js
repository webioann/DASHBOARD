import React from 'react';
import { useSelector } from 'react-redux';
import '../LESS/modal.less';

function ModalForCharts({ children }) {
    const modal = useSelector((state) => state.dialect.chartsModal);

    if (modal) {
        return (
            <div className="modal-container">
                <div className="modal-window">{children}</div>
            </div>
        );
    } else {
        return null;
    }
}
export default ModalForCharts;
