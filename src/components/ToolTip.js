import React from 'react';
import useTranslator from '../hooks/useTranslator';
import '../less/tooltip.less';

function ToolTip({ text, children }) {
    return (
        <div className="tooltip-wraper">
            <span className="tooltip">{useTranslator(text)}</span>
            {children}
        </div>
    );
}

export default ToolTip;
