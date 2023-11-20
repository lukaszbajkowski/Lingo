import {Grid} from "@mui/material";
import React from "react";
import AnimatedElement from "../Animation/AnimatedElementOnce";
import ImageUser from "../BlogUser/Components/Img/ImageUser";
import TitleUser from "../BlogUser/Components/Texts/TitleUser";
import IntroductionUser from "../BlogUser/Components/Texts/IntroductionUser";
import {Link as RouterLink} from "react-router-dom";
import Button from "@mui/material/Button";

function SingelPostCategory (props) {

    return (
        <AnimatedElement className={`animated-element animated-element-delay-100ms`}>
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <ImageUser
                        id={props.id}
                        className={props.className}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Grid item xs={12} className={props.className}>
                        <AnimatedElement className={`animated-element animated-element-delay-200ms`}>
                            <Button
                                variant="outlined"
                                color="primary"
                                component={RouterLink}
                                className="CategoryButton"
                            >
                                {props.category}
                            </Button>
                        </AnimatedElement>
                        <AnimatedElement className={`animated-element animated-element-delay-300ms`}>
                            <TitleUser
                                title={props.title}
                                id={props.id}
                            />
                        </AnimatedElement>
                        <AnimatedElement className={`animated-element animated-element-delay-400ms`}>
                            <IntroductionUser
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

export default SingelPostCategory;
