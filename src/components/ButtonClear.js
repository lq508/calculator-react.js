import React from "react";
import "../css/ButtonClear.css";

const BotonClear = (props)=>(
    <div className="button-clear" onClick={() => {props.Clear()}}>
        {props.children}
    </div>

)

export default BotonClear;