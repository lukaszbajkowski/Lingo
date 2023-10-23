import React from 'react';
import SideImage from '../../Images/Translator-amico.svg';
import '../../styles_components/style_header.scss';
import '../../styles_components/style_cta.scss'
import {Link as RouterLink} from "react-router-dom";
import Button from "@mui/material/Button";
import {Grid} from "@mui/material";
import AnimatedElement from '../../Animation/AnimatedElementOnce';
import {Link} from "react-scroll";

function Hero() {
    return (
        <Grid container spacing={2} className="Hero">
            <Grid item xs={12} sm={12} md={6} className="HeroGrid">
                <AnimatedElement className="animated-element animated-element-hero-delay-100ms">
                    <h1 className="Title">
                        Słowa łączą nas
                    </h1>
                </AnimatedElement>
                <AnimatedElement className="animated-element animated-element-hero-delay-200ms">
                    <p className="Paragraph">
                        Tworzymy mosty między językami, aby pomóc Ci komunikować się ze światem.
                    </p>
                </AnimatedElement>
                <AnimatedElement className="animated-element animated-element-hero-delay-300ms">
                    <Link
                        className="stylebutton"
                        activeClass="active"
                        to="pricing"
                        spy={true}
                        smooth={true}
                        offset={-90}
                        duration={500}
                    >
                        <Button variant="contained" color="primary" component={RouterLink} className="ButtonHero" to="/start">
                            Zacznij już
                        </Button>
                    </Link>
                </AnimatedElement>
            </Grid>
            <Grid item xs={12} sm={12} md={6} style={{paddingLeft: 0, paddingTop:0}}>
                <AnimatedElement className="animated-element-hero-image animated-element-hero-delay-100ms">
                    <img src={SideImage} alt="SideImage" className="SideImage" />
                </AnimatedElement>
            </Grid>
        </Grid>
    );
}

export default Hero;