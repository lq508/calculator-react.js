import React from "react";
import "../css/Screen.css";
/* Otra forma de definir un componente en react */

const Screen = ({input})=>(
    <div className="input">
        {input}

    </div>

);

export default Screen;