import React from 'react';
import '../styles_components/style_footer.scss';
import {Link as RouterLink} from "react-router-dom";
import Button from "@mui/material/Button";
import {Grid} from "@mui/material";
import AnimatedElement from '../Animation/AnimatedElementOnce';
import AboutUsButton from "../LandingPage/Components/Header/Buttons/AboutUsButton";
import HowItWorksButton from "../LandingPage/Components/Header/Buttons/HowItWorksButton";
import Logo from "../Header/Buttons/Logo";

function Footer () {
    return (
        <Grid container spacing={2} className="Footer">
            <Grid item xs={12} style={{paddingLeft: 0, paddingTop: 0, marginTop: 'auto', marginBottom: 'auto',}}>
                <AnimatedElement className="animated-element-logo">
                    <Logo/>
                </AnimatedElement>
            </Grid>
            <Grid item xs={12} sm={5}>
                <AnimatedElement className="animated-element-footer FooterPosition">
                    <Grid container spacing={2} className="FooterElement">
                        <Grid item>
                            {/*Buttons from header*/}
                            <AboutUsButton/>
                        </Grid>
                        <Grid item>
                            {/*Buttons from header*/}
                            <HowItWorksButton/>
                        </Grid>
                        <Grid item style={{paddingLeft: 0}}>
                            <Button variant="text" color="inherit" component={RouterLink} className="column-button"
                                    to="/blog">
                                Blog
                            </Button>
                        </Grid>
                    </Grid>
                </AnimatedElement>
            </Grid>
            <Grid item xs={12} sm={7} style={{marginBlock: "auto"}}>
                <AnimatedElement className="animated-element-copyright">
                    <h3 className="Copyright">
                        Copyright © 2023 Lingo All rights reserved
                    </h3>
                </AnimatedElement>
            </Grid>
        </Grid>
    );
}

export default Footer;