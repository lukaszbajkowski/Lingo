import {Link as RouterLink} from "react-router-dom";
import Button from "@mui/material/Button";
import React from "react";

function GetStartedButtonBlog() {
    return (
        <Button
            variant="contained"
            color="primary"
            component={RouterLink}
            className="ButtonGetStarted"
            to="/blog/categories"
        >
            Kategorie
        </Button>
    )
}

export default GetStartedButtonBlog;


