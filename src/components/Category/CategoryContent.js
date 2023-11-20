import React from "react";
import {Box, Container, Typography} from "@mui/material";
import AnimatedElement from "../Animation/AnimatedElementOnce";
import SinglePostCategory from "../Categories/SinglePostCategory";

export default function CategoryContent ({category}) {
    return (
        <Container>
            <AnimatedElement className={`animated-element animated-element-delay-100ms`}>
                <Typography
                    variant={`h4`}
                    className={`CategoryCTA Font`}
                >
                    {category.name}
                </Typography>
            </AnimatedElement>
            <AnimatedElement className={`animated-element animated-element-delay-200ms`}>
                <Typography
                    variant='body1'
                    className={`PositionUserCategory Font`}
                >
                    {category.description}
                </Typography>
            </AnimatedElement>

            {category.posts && category.posts.length > 0 ? (
                <Box>
                    <AnimatedElement className={`animated-element animated-element-delay-300ms`}>
                        <Typography
                            variant={`h6`}
                            className={`PositionUserCategoryPost Font`}
                        >
                            Posty w tej kategorii:
                        </Typography>
                    </AnimatedElement>
                    {category.posts.map((post, index) => (
                        <SinglePostCategory
                            key={post._id}
                            id={post._id}
                            title={post.title}
                            body={post.body}
                            category={category.name}
                            className={index === 0 ? 'FirstElementPosition' : 'Position'}
                        />
                    ))}

                </Box>
            ) : (
                <p>Brak postów w tej kategorii.</p>
            )}
        </Container>
    )
}
