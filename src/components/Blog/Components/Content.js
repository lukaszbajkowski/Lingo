import AnimatedElement from "../../Animation/AnimatedElementOnce";
import React from "react";
import {Grid, Typography} from "@mui/material";
import '../../styles_components/style_content.scss';
import {Link as RouterLink} from "react-router-dom";
import Button from "@mui/material/Button";

function Content() {
    return (
        <AnimatedElement className={`animated-element animated-element-delay-100ms`}>
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <RouterLink
                        to="/"
                    >
                        <div className={`Content`}></div>
                    </RouterLink>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Grid item xs={12} className={`Position`}>
                        <AnimatedElement className={`animated-element animated-element-delay-200ms`}>
                            <Button
                                variant="outlined"
                                color="primary"
                                component={RouterLink}
                                className="CategoryButton"
                                // to="/blog/categories/:id"
                            >
                                Duis mollis
                            </Button>
                        </AnimatedElement>
                        <AnimatedElement className={`animated-element animated-element-delay-300ms`}>
                            <RouterLink
                                to="/"
                                className={`HoverFont`}
                            >
                                <Typography variant='h4' gutterBottom  className={`Font`}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </Typography>
                            </RouterLink>
                        </AnimatedElement>
                        <AnimatedElement className={`animated-element animated-element-delay-400ms`}>
                            <RouterLink
                                to="/"
                                className={`HoverFont`}
                            >
                                <Typography variant='body1' gutterBottom className={`Font`}>
                                    Suspendisse a sollicitudin urna, vitae auctor nulla.
                                    Quisque eu sem eu velit vulputate tristique vel et enim.
                                    Vestibulum ligula nibh, ornare in ipsum rutrum, bibendum hendrerit enim.
                                    Suspendisse pulvinar vulputate nisi nec tincidunt.
                                    Duis at ante commodo, placerat velit scelerisque, efficitur ex.
                                    Aenean eget imperdiet felis. Aenean et tempor felis.
                                </Typography>
                            </RouterLink>
                        </AnimatedElement>
                    </Grid>
                </Grid>
            </Grid>
        </AnimatedElement>
    )
}

export default Content;