import {Link as RouterLink} from "react-router-dom";
import Button from "@mui/material/Button";
import React from "react";

function GetStartedButtonLandingPage() {
    return (
        <Button
            variant="contained"
            color="primary"
            component={RouterLink}
            className="ButtonGetStarted"
            to="/start"
        >
            Rozpocznij
        </Button>
    )
}

export default GetStartedButtonLandingPage;
