import {Typography} from "@mui/material";
import React from "react";
import '../../../styles_components/style_content.scss'

function PostText (props) {
    return (
        <Typography variant='body1' gutterBottom className={`Font`}>
            {props.body}
        </Typography>
    );
}

export default PostText;
