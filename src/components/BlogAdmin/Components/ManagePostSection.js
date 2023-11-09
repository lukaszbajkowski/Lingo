import {Grid} from "@mui/material";
import AnimatedElement from "../../Animation/AnimatedElementOnce";
import DeletePostButton from "./Post/RightColumn/DeletePostButton";
import EditPostButton from "./Post/RightColumn/EditPostButton";
import PostLinkButton from "./Post/RightColumn/PostLinkButton";
import React from "react";

export default function ManagePostSection (props) {
    return (
        <Grid container sx={{mb: 2}}>
            <Grid item xs={4} style={{margin: 0, flex: 1, marginRight: '4px'}}>
                <AnimatedElement className={`animated-element animated-element-delay-200ms`}>
                    <DeletePostButton
                        id={props.id}
                        onDelete={props.onDelete}
                    />
                </AnimatedElement>
            </Grid>
            <Grid item xs={4} style={{margin: 0, flex: 1, marginInline: '4px'}}>
                <AnimatedElement className={`animated-element animated-element-delay-200ms`}>
                    <EditPostButton
                        editHandler={props.editHandler}
                    />
                </AnimatedElement>
            </Grid>
            <Grid item xs={4} style={{margin: 0, flex: 1, marginLeft: '4px'}}>
                <AnimatedElement className={`animated-element animated-element-delay-200ms`}>
                    <PostLinkButton
                        id={props.id}
                    />
                </AnimatedElement>
            </Grid>
        </Grid>
    );
}
