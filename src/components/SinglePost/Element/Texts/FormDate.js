import {Typography} from "@mui/material";
import React from "react";
import '../../../styles_components/style_content.scss'

function FormDate (props) {
    return (
        <Typography variant='body1' gutterBottom className={`HoverFont Font`}>
            {props.body}
        </Typography>
    );
}

export default FormDate;
