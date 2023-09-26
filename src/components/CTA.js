import React from 'react';
import SideImage from './images/Telework-pana.svg';
import './styles_components/style_cta.scss';
import {Link as RouterLink} from "react-router-dom";
import Button from "@mui/material/Button";
import {Grid} from "@mui/material";
import AnimatedElement from './AnimatedElementOnce';

function CTA() {
    return (
        <Grid container spacing={2} className="CTA">
            <Grid item xs={12} sm={12} md={6} style={{paddingLeft: 0, paddingTop: 0, marginTop: 'auto', marginBottom: 'auto',}}>
                <AnimatedElement className="animated-element-delay-100ms">
                    <h1 style={{marginBottom: 24, fontSize: 48, lineHeight: "54px", fontWeight: 600}}>
                        Wybierz Lingo
                    </h1>
                </AnimatedElement>
                <AnimatedElement className="animated-element-delay-200ms">
                    <p style={{marginBottom: 24, marginTop: 0, fontSize: 18, lineHeight: "26px"}}>
                        Wyobraź sobie, że możesz osiągnąć nadzwyczajny sukces dzięki niezawodnym tłumaczeniom. Odkryj potencjał językowej precyzji i skuteczności z nami już teraz.
                    </p>
                </AnimatedElement>
                <AnimatedElement className="animated-element-delay-200ms">
                    <Button variant="contained" color="primary" component={RouterLink} className="ButtonHero" to="/start">
                        Zacznij już
                    </Button>
                </AnimatedElement>
            </Grid>
            <Grid item xs={12} sm={12} md={6} style={{paddingLeft: 0, paddingTop:0}}>
                <AnimatedElement className="animated-element-image">
                    <img src={SideImage} alt="SideImageCTA" className="SideImageCTA" />
                </AnimatedElement>
            </Grid>
        </Grid>
    );
}

export default CTA;