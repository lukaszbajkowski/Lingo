import {useLocation} from "react-router-dom";
import {Link} from "react-scroll";
import React from "react";
import GetStartedButtonLandingPage from "./GetStartedButtonLandingPage";
import GetStartedButtonBlog from "../../../../Blog/Components/Header/Buttons/GetStartedButtonBlog";

function GetStartedButton() {
    const location = useLocation();

    return (
        <span>
            {location.pathname === "/" ? (
                <GetStartedButtonLandingPage/>
            ) : (
                <GetStartedButtonBlog/>
            )}
        </span>
    )
}

export default GetStartedButton;