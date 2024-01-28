import {Grid} from "@mui/material";
import React from "react";
import AnimatedElement from "../../Animation/AnimatedElementOnce";
import CategoryButtonUser from "./Buttons/CategoryButtonUser";
import TitleUser from "./Texts/TitleUser";
import IntroductionUser from "./Texts/IntroductionUser";
import ImageUser from "./Img/ImageUser";

function SingelPost (props) {
    const categoryName = props.categories.find(category => category._id === props.category)?.name;

    return (
        <AnimatedElement className={`animated-element animated-element-delay-100ms`}>
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <ImageUser
                        id={props.id}
                        className={""}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Grid item xs={12} className={`Position`}>
                        <AnimatedElement className={`animated-element animated-element-delay-200ms`}>
                            <CategoryButtonUser
                                category={categoryName}
                                category_id={props.category}
                                categories={props.categories}
                            />
                        </AnimatedElement>
                        <AnimatedElement className={`animated-element animated-element-delay-300ms`}>
                            <TitleUser
                                title={props.title}
                                id={props.id}
                            />
                        </AnimatedElement>
                        <AnimatedElement className={`animated-element animated-element-delay-400ms`}>
                            <IntroductionUser
                                body={props.shortbody}
                                id={props.id}
                            />
                        </AnimatedElement>
                    </Grid>
                </Grid>
            </Grid>
        </AnimatedElement>
    );
}

export default SingelPost;
