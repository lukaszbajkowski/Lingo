import {Link} from "react-scroll";
import Button from "@mui/material/Button";
import React from "react";

function PricingButton() {
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
            <Button
                variant="text"
                color="inherit"
                className="column-button"
            >
                Ceny
            </Button>
        </Link>
    )
}

export default PricingButton;
