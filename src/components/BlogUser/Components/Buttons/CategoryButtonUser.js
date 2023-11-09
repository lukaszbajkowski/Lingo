import {Link as RouterLink} from "react-router-dom";
import Button from "@mui/material/Button";
import React from "react";
import '../../../styles_components/style_content.scss'

function CategoryButtonUser (props) {
    return (
        <Button
            variant="outlined"
            color="primary"
            component={RouterLink}
            className="CategoryButton"
            to={`/category/${props.category_id}`}
        >
            {props.category}
        </Button>
    );
}

export default CategoryButtonUser;