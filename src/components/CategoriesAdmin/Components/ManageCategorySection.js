import {Grid} from "@mui/material";
import AnimatedElement from "../../Animation/AnimatedElementOnce";
import React from "react";
import CategoryLinkButton from "./Buttons/CategoryLinkButton";
import EditCategoryButton from "./Buttons/EditCategoryButton";
import DeleteCategoryButton from "./Buttons/DeleteCategoryButton";

export default function ManageCategorySection (props) {
    return (
        <Grid container sx={{mb: 2}}>
            <Grid item xs={12}>
                <AnimatedElement className={`animated-element animated-element-delay-200ms`}>
                    <DeleteCategoryButton
                        id={props.id}
                        onDelete={props.onDelete}
                    />
                </AnimatedElement>
            </Grid>
            <Grid
                item
                xs={12}
                className={`ManageCategorySection`}
            >
                <AnimatedElement className={`animated-element animated-element-delay-200ms`}>
                    <EditCategoryButton
                        editHandler={props.editHandler}
                    />
                </AnimatedElement>
            </Grid>
            <Grid item xs={12}>
                <AnimatedElement className={`animated-element animated-element-delay-200ms`}>
                    <CategoryLinkButton
                        id={props.id}
                    />
                </AnimatedElement>
            </Grid>
        </Grid>
    );
}
