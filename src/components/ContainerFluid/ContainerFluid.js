import React from "react"
import { useSelector } from "react-redux";
import "../App/global.css"
import "./container-fluid.css"

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
