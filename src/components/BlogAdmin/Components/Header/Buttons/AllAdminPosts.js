import {Link as RouterLink} from "react-router-dom";
import Button from "@mui/material/Button";
import React from "react";

function AllAdminPosts() {
    return (
        <Button
            variant="contained"
            color="primary"
            component={RouterLink}
            className="ButtonGetStarted"
            to="/blog/admin"
        >
            Posty
        </Button>
    )
}

export default AllAdminPosts;


