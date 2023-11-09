import {Grid} from "@mui/material";
import AnimatedElement from "../../Animation/AnimatedElementOnce";
import Button from "@mui/material/Button";
import React from "react";
import Image from "./Post/LeftColumn/Image";
import CategoryButton from "./Post/RightColumn/CategoryButton";
import Introduction from "./Post/RightColumn/Introduction";
import Title from "./Post/RightColumn/Title";
import {Link} from "react-router-dom";

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
                        <Grid container sx={{mb: 2}}>
                            <Grid item xs={4} style={{margin: 0, flex: 1, marginRight: '4px'}}>
                                <AnimatedElement className={`animated-element animated-element-delay-200ms`}>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        fullWidth
                                        className={`OpenAddPostButton`}
                                        onClick={() => {
                                            props.onDelete(props.id)
                                        }}
                                    >
                                        Usuń
                                    </Button>
                                </AnimatedElement>
                            </Grid>
                            <Grid item xs={4} style={{margin: 0, flex: 1, marginInline: '4px'}}>
                                <AnimatedElement className={`animated-element animated-element-delay-200ms`}>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        fullWidth
                                        className={`OpenAddPostButton`}
                                        onClick={editHandler}
                                    >
                                        Edytuj
                                    </Button>
                                </AnimatedElement>
                            </Grid>
                            <Grid item xs={4} style={{margin: 0, flex: 1, marginLeft: '4px'}}>
                                <Link to={`/post/${props.id}`}>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        fullWidth
                                        className={`OpenAddPostButton`}
                                    >
                                        Przejdź do postu
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
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
    )
        ;
}

export default Posts;
