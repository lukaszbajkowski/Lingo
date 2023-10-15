import logo from "../../images/logo-no-background.png";
import {Link as RouterLink} from "react-router-dom";
import React from "react";

function Logo() {
    return (
        <RouterLink to="/">
            <img src={logo} alt="Logo" className="App-logo"/>
        </RouterLink>
    )
}

export default Logo;