import {Grid} from "@mui/material";
import AnimatedElement from "../../../Animation/AnimatedElementOnce";
import React from "react";
import CategoryButton from "./RightColumn/CategoryButton";
import Title from "./RightColumn/Title";
import Introduction from "./RightColumn/Introduction";
import ImagePost from "./LeftColumn/Image";
import Button from "@mui/material/Button";

function Post(props) {
    props.onDelete(props.id)

    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={6}>
                <ImagePost/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <Grid item xs={12} className={`Position`}>
                    <AnimatedElement className={`animated-element animated-element-delay-200ms`}>
                        <CategoryButton category={props.category}/>
                    </AnimatedElement>
                    <AnimatedElement className={`animated-element animated-element-delay-300ms`}>
                        <Title title={props.title}/>
                    </AnimatedElement>
                    <AnimatedElement className={`animated-element animated-element-delay-400ms`}>
                        <Introduction content={props.content}/>
                    </AnimatedElement>
                    <Button
                        variant="outlined"
                        color="primary"
                        className="CategoryButton"
                        onClick={() => props.onDelete(props.id)}
                    >
                        Usuń
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Post;
