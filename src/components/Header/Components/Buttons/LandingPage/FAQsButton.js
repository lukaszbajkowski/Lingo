import Button from "@mui/material/Button";
import {Link} from "react-scroll";
import React from "react";

function FAQsButton() {
    return (
        <Link
            className="stylebutton"
            activeClass="active"
            to="faqs"
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
                FAQs
            </Button>
        </Link>
    )
}

export default FAQsButton;
