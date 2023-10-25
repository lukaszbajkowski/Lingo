import {Link as RouterLink} from "react-router-dom";
import Button from "@mui/material/Button";
import React from "react";
import '../../../../styles_components/style_content.scss'

function CategoryButton (props) {
    return (
        <Button
            variant="outlined"
            color="primary"
            component={RouterLink}
            className="CategoryButton"
            // to="/blog/categories/:id"
        >
            {/*{props.category}*/}
            Na kategorię
        </Button>
    );
}

export default CategoryButton;