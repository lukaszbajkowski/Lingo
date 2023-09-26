import React from 'react';
import './styles_components/style_header.scss';
import {Container, Grid} from "@mui/material";
import AnimatedElement from './AnimatedElementOnce';

function AboutUsText() {
    return (
        <Container style={{paddingTop: 0}}>
            <Grid container spacing={2} className="AboutUs">
                <AnimatedElement className="animated-element" speed="0.5">
                    <h1 className="content-to-animate">
                        Tłumaczenie to nie tylko przenoszenie słów z jednego języka na drugi. To także przenoszenie idei, myśli i emocji. To proces, który pozwala ludziom z różnych kultur zrozumieć się nawzajem na głębszym poziomie.
                    </h1>
                </AnimatedElement>
            </Grid>
        </Container>
    );
}
// Ogarnąc poprawnie animacje aby pojawiała sie tylko raz ale gdy użytkownik pierwszy raz zobaczy
// ten element a nie gdy on się ładuje

export default AboutUsText;
