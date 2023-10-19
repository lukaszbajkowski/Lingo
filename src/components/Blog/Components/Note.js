import {Grid, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import AnimatedElement from "../../Animation/AnimatedElementOnce";
import Button from "@mui/material/Button";
import React from "react";

function Note(props) {
    const editHandler = () => {
        props.onEdit({
            id: props.id,
            title: props.title,
            body: props.body
        });
    }

    return(
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
                                to="/blog/categories/:id"
                                onClick={() => {props.onDelete(props.id)}}
                            >
                                Na kategorie
                            </Button>
                        </AnimatedElement>
                        <AnimatedElement className={`animated-element animated-element-delay-200ms`}>
                            <Button
                                variant="outlined"
                                color="primary"
                                className="CategoryButton"
                                onClick={() => {props.onDelete(props.id)}}
                            >
                                Usuń
                            </Button>
                        </AnimatedElement>
                        <AnimatedElement className={`animated-element animated-element-delay-200ms`}>
                            <Button
                                variant="outlined"
                                color="primary"
                                className="CategoryButton"
                                onClick={editHandler}
                            >
                                Edytuj
                            </Button>
                        </AnimatedElement>
                        <AnimatedElement className={`animated-element animated-element-delay-300ms`}>
                            <RouterLink
                                to="/"
                                className={`HoverFont`}
                            >
                                <Typography variant='h4' gutterBottom  className={`Font`}>
                                    {props.title}
                                </Typography>
                            </RouterLink>
                        </AnimatedElement>
                        <AnimatedElement className={`animated-element animated-element-delay-400ms`}>
                            <RouterLink
                                to="/"
                                className={`HoverFont`}
                            >
                                <Typography variant='body1' gutterBottom className={`Font`}>
                                    {props.body}
                                </Typography>
                            </RouterLink>
                        </AnimatedElement>
                    </Grid>
                </Grid>
            </Grid>
        </AnimatedElement>
    );
}
export default Note;
