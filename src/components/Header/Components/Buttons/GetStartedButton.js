import Button from "@mui/material/Button";
import {Link as RouterLink, useLocation} from "react-router-dom";
import {Link} from "react-scroll";
import React from "react";

function GetStartedButton() {
    const location = useLocation();

    return (
        <Link
            className="stylebutton"
            activeClass="active"
            to="pricing"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
        >
            {location.pathname === "/" ? (
                <Button
                    variant="contained"
                    color="primary"
                    component={RouterLink}
                    className="ButtonGetStarted"
                    to="/start"
                >
                    Rozpocznij
                </Button>
            ) : (
                <Button
                    variant="contained"
                    color="primary"
                    component={RouterLink}
                    className="ButtonGetStarted"
                    to="/blog/categories"
                >
                    Kategorie
                </Button>
            )}
        </Link>
    )
}

export default GetStartedButton;