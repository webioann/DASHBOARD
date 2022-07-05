import React from "react"
import { useSelector } from "react-redux";
import "../CSS/index.less"
import "../CSS/container-fluid.less"

function ContainerFluid(props) {

    const themeMode = useSelector((state) => state.dialect.themeMode);

    return (
        <div className={`container-fluid-${themeMode}`}>
            <div className={`container-${themeMode}`}>
                {props.children}
            </div>
        </div>
    )
}

export default ContainerFluid;
