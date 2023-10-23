import {Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import React from "react";
import '../../../../styles_components/style_content.scss'

function Introduction(props) {
    return (
        <RouterLink
            // to="/"
            className={`HoverFont`}
        >
            <Typography variant='body1' gutterBottom className={`Font`}>
                {props.body}
            </Typography>
        </RouterLink>
    );
}

export default Introduction;
