import {Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import React from "react";
import '../../../styles_components/style_content.scss'

function TitleUser (props) {
    return (
        <RouterLink
            to={`/post/${props.id}`}
            className={`HoverFont`}
        >
            <Typography variant='h4' gutterBottom className={`Font`}>
                {props.title}
            </Typography>
        </RouterLink>
    )
}

export default TitleUser;