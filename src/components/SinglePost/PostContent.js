import {Grid} from "@mui/material";
import React from "react";
import AnimatedElement from "../Animation/AnimatedElementOnce";
import MainImage from "./Components/Images/MainImage";
import CategoryButton from "../BlogAdmin/Components/Post/RightColumn/CategoryButton";
import FormDate from "./Components/Texts/FormDate";
import PostText from "./Components/Texts/PostText";
import PostTitle from "./Components/Texts/PostTitle";


function PostContent (props) {
    const categoryName = props.categories.find(category => category._id === props.category)?.name;

    function formatDateToPolishFormat (date) {
        const options = {day: "2-digit", month: "2-digit", year: "numeric"};
        return new Date(date).toLocaleDateString("pl-PL", options);
    }

    const formattedDate = formatDateToPolishFormat(props.createdAt);

    return (
        <Grid container>
            <Grid item xs={12}>
                <AnimatedElement className={`animated-element animated-element-delay-100ms`}>
                    <MainImage/>
                </AnimatedElement>
            </Grid>
            <Grid item xs={12}>
                <Grid item xs={12} className={`PositionPostContent`}>
                    <AnimatedElement className={`animated-element animated-element-delay-200ms`}>
                        <CategoryButton
                            category={categoryName}
                            category_id={props.category}
                            categories={props.categories}
                        />
                    </AnimatedElement>
                    <AnimatedElement className={`animated-element animated-element-delay-300ms`}>
                        <FormDate
                            body={formattedDate}
                        />
                    </AnimatedElement>
                    <AnimatedElement className={`animated-element animated-element-delay-300ms`}>
                        <PostTitle
                            title={props.title}
                        />
                    </AnimatedElement>
                    <AnimatedElement className={`animated-element animated-element-delay-300ms`}>
                        <div dangerouslySetInnerHTML={{ __html: props.body }} />
                    </AnimatedElement>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default PostContent;