import React, {useEffect, useState} from 'react';
import './styles_components/style_footer.scss';
import {Link as RouterLink} from "react-router-dom";
import Button from "@mui/material/Button";
import {Grid} from "@mui/material";
import AnimatedElement from './AnimatedElementOnce';
import logo from "./images/logo-no-background.png";
import Typography from "@mui/material/Typography";

function Footer() {
    return (
        <Grid container spacing={2} className="Footer">
            <Grid item xs={12} style={{paddingLeft: 0, paddingTop: 0, marginTop: 'auto', marginBottom: 'auto',}}>
                <AnimatedElement className="animated-element-logo">
                    <Typography variant="h6" component={RouterLink} to="/" style={{ textDecoration: 'none', color: 'white' }}>
                        <img src={logo} alt="Logo" className="App-logo" />
                    </Typography>
                </AnimatedElement>
            </Grid>
            <Grid item xs={12} sm={5}>
                <AnimatedElement className="animated-element-footer FooterPosition">
                    <Grid container spacing={2} className="FooterElement">
                        <Grid item>
                            <Button
                                variant="text"
                                color="inherit"
                                className="footer-button"
                            >
                                O nas
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                              variant="text"
                              color="inherit"
                              className="footer-button"
                            >
                                Jak to działa
                            </Button>
                        </Grid>
                        <Grid item style={{ paddingLeft: 0 }}>
                            <Button
                                variant="text"
                                color="inherit"
                                className="footer-button"
                            >
                                Ceny
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