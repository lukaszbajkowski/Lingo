import {Typography} from "@mui/material";
import React from "react";
import '../../../styles_components/style_content.scss'

function PostTitle (props) {
    return (
        <Typography variant='h4' gutterBottom className={`Font`}>
            {props.title}
        </Typography>
    )
}

export default PostTitle;