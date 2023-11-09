import {Grid} from "@mui/material";
import AnimatedElement from "../../Animation/AnimatedElementOnce";
import React from "react";
import Image from "./Post/LeftColumn/Image";
import CategoryButton from "./Post/RightColumn/CategoryButton";
import Introduction from "./Post/RightColumn/Introduction";
import Title from "./Post/RightColumn/Title";
import ManagePostSection from "./ManagePostSection";

function Posts (props) {
    const editHandler = () => {
        props.onEdit({
            _id: props.id,
            title: props.title,
            body: props.body,
            category: props.category
        });
    }

    const categoryName = props.categories.find(category => category._id === props.category)?.name;

    return (
        <AnimatedElement className={`animated-element animated-element-delay-100ms`}>
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <Image
                        id={props.id}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Grid item xs={12} className={`Position`}>
                        <ManagePostSection
                            id={props.id}
                            onDelete={props.onDelete}
                            editHandler={editHandler}
                        />
                        <AnimatedElement className={`animated-element animated-element-delay-200ms`}>
                            <CategoryButton
                                category={categoryName}
                                category_id={props.category}
                                categories={props.categories}
                            />
                        </AnimatedElement>
                        <AnimatedElement className={`animated-element animated-element-delay-300ms`}>
                            <Title
                                title={props.title}
                                id={props.id}
                            />
                        </AnimatedElement>
                        <AnimatedElement className={`animated-element animated-element-delay-400ms`}>
                            <Introduction
                                body={props.body}
                                id={props.id}
                            />
                        </AnimatedElement>
                    </Grid>
                </Grid>
            </Grid>
        </AnimatedElement>
    );
}

export default Posts;
