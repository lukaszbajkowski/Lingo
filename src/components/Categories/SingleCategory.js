import React from "react";
import AnimatedElement from "../Animation/AnimatedElementOnce";
import {Link as RouterLink} from "react-router-dom";
import {Button, Card, CardContent, Grid, Typography} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function SingleCategory (props) {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} style={{width: '100%'}}>
            <AnimatedElement className={`animated-element animated-element-delay-100ms`}>
                <Card className={`Card`}>
                    <CardContent className={`CardContent`}>
                        <FontAwesomeIcon
                            icon={props.icon}
                            size={`lg`}
                            style={{backgroundColor: props.iconColor, color: props.color}}
                            className="fa-icon"
                        />
                        <Typography
                            variant="h5"
                            gutterBottom
                            className={`CategoryTitle`}
                        >
                            {props.name}
                        </Typography>
                        <Typography
                            variant="body1"
                            className={`Font`}
                        >
                            {props.shortdesc}
                        </Typography>
                        <div className={`ArrowButtonPosition`}>
                            <Button
                                color="secondary"
                                variant="text"
                                component={RouterLink}
                                className={`RightArrowButton`}
                                to={`/category/${props.id}`}
                            >
                                <FontAwesomeIcon
                                    icon="fa-solid fa-arrow-right"
                                    size={`lg`}
                                />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </AnimatedElement>
        </Grid>
    );
}

export default SingleCategory;
