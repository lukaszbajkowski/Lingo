import {Grid, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import AnimatedElement from "../../Animation/AnimatedElementOnce";
import Button from "@mui/material/Button";
import React from "react";
import ImagePost from "./Post/LeftColumn/Image";
import CategoryButton from "./Post/RightColumn/CategoryButton";
import Introduction from "./Post/RightColumn/Introduction";
import Title from "./Post/RightColumn/Title";

function Note(props) {
    const editHandler = () => {
        props.onEdit({
            _id: props.id,
            title: props.title,
            body: props.body
        });
    }

    return(
        <AnimatedElement className={`animated-element animated-element-delay-100ms`}>
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <ImagePost/>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Grid item xs={12} className={`Position`}>
                        <AnimatedElement className={`animated-element animated-element-delay-200ms`}>
                            <CategoryButton/>
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
                            <Title
                                title={props.title}
                            />
                        </AnimatedElement>
                        <AnimatedElement className={`animated-element animated-element-delay-400ms`}>
                            <Introduction
                                body={props.body}
                            />
                        </AnimatedElement>
                    </Grid>
                </Grid>
            </Grid>
        </AnimatedElement>
    );
}
export default Note;
