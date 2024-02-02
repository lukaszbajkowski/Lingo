import logo from "../Images/logo-no-background.png";
import {Link as RouterLink} from "react-router-dom";
import React from "react";
import AnimatedElement from "../Animation/AnimatedElementOnce";

function Logo () {
    return (
        <div className={`logo`}>
            <AnimatedElement className="animated-element-header animated-element animated-element-delay-200ms">
                <RouterLink
                    to="/"
                    className={`logo-position`}
                >
                    <img src={logo} alt="Logo" className="App-logo"/>
                </RouterLink>
            </AnimatedElement>
        </div>
    )
}

export default Logo;