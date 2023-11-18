import {Link as RouterLink} from "react-router-dom";
import Button from "@mui/material/Button";
import React from "react";

function AllAdminCategoryButton() {
    return (
        <Button
            variant="contained"
            color="primary"
            component={RouterLink}
            className="ButtonGetStarted"
            to="/categories/admin"
        >
            Kategorie
        </Button>
    )
}

export default AllAdminCategoryButton;


