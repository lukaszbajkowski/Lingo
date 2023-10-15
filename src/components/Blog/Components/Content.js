import AnimatedElement from "../../Animation/AnimatedElementOnce";
import React from "react";
import {Grid} from "@mui/material";
import '../../styles_components/style_content.scss';

function Content() {
    return (
        <AnimatedElement className="animated-element animated-element-hero-delay-100ms">
            <Grid container spacing={2} className={`Content`}>

            </Grid>
        </AnimatedElement>
    )
}

export default Content;