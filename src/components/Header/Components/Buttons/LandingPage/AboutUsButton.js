import Button from "@mui/material/Button";
import {Link} from "react-scroll";
import React from "react";

function AboutUsButton() {
    return (
        <Link
            activeClass="active"
            to="about-us"
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
                O nas
            </Button>
        </Link>
    )
}

export default AboutUsButton;
