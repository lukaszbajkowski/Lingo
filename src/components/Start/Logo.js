import logo from "../Images/logo-no-background.png";
import {Link as RouterLink} from "react-router-dom";
import React from "react";

function Logo () {
    return (
        <RouterLink
            to="/"
            style={{
                position: 'absolute',
                left: "0%",
                transform: 'translate(0%, 100%)',
                marginInline: "10%",
                paddingInline: "40px"
            }}
        >
            <img src={logo} alt="Logo" className="App-logo"/>
        </RouterLink>
    )
}

export default Logo;