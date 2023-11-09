import {Link as RouterLink} from "react-router-dom";
import Button from "@mui/material/Button";
import React from "react";

function AllPosts() {
    return (
        <Button
            variant="contained"
            color="primary"
            component={RouterLink}
            className="ButtonGetStarted"
            to="/blog"
        >
            Posty
        </Button>
    )
}

export default AllPosts;


