import Button from "@mui/material/Button";
import {Link} from "react-scroll";
import React from "react";

function HowItWorksButton() {
    return (
        <Link
            className="stylebutton"
            activeClass="active"
            to="how-it-works"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
        >
            <Button
                variant="text"
                color="inherit"
                className="column-button"
            >
                Jak to działa
            </Button>
        </Link>
    )
}

export default HowItWorksButton;
