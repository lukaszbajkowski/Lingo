import React from "react";
import AnimatedElement from "../Animation/AnimatedElementOnce";
import {Link as RouterLink} from "react-router-dom";
import {Button, Card, CardContent, Grid, Typography} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ManageCategorySection from "./Components/ManageCategorySection";
import "../styles_components/style_content.scss"

function SingleAdminCategory (props) {
    const editHandler = () => {
        props.onEdit({
            _id: props.id,
            name: props.name,
            description: props.description,
            shortdesc: props.shortdesc,
            icon: props.icon,
            iconColor: props.iconColor,
            color: props.color,
        });
    }
    return (
        <Grid
            item
            xs={12}
            sm={12}
            md={6}
            style={{width: '100%'}}
        >
            <AnimatedElement className={`animated-element animated-element-delay-100ms`}>
                <Grid container
                      spacing={2}
                      className={`SingleAdminCategory`}
                >
                    <Grid item xs={6}>
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
                    </Grid>
                    <Grid item xs={6}>
                        <ManageCategorySection
                            id={props.id}
                            onDelete={props.onDelete}
                            editHandler={editHandler}
                        />
                    </Grid>
                </Grid>

            </AnimatedElement>
        </Grid>
    );
}

export default SingleAdminCategory;
