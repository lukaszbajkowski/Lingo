import React from 'react';
import './styles_components/style_about_us.scss';
import { Grid, Box } from "@mui/material";
import AnimatedElement from './AnimatedElementOnce';

function AboutUsText() {
    return (
        <Box sx={{ paddingTop: 0 }}>
            <Grid container spacing={2} className="AboutUs">
                <AnimatedElement className="animated-element animated-element-delay-100ms" threshold=".7">
                    <h1 className="content-to-animate">
                        Tłumaczenie to nie tylko przenoszenie słów z jednego języka na drugi. To także przenoszenie idei, myśli i emocji. To proces, który pozwala ludziom z różnych kultur zrozumieć się nawzajem na głębszym poziomie.
                    </h1>
                </AnimatedElement>
            </Grid>
        </Box>
    );
}

export default AboutUsText;
