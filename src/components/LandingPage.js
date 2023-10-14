import React from 'react';
import '../styles/style.scss';
import './styles_components/style_animations.scss';

import Header from './Header/Header';
import Hero from './Hero';
import AboutUs from './AboutUs';
import AboutUsText from './AboutUsText'
import Slider from './Slider'
import Features from "./Features";
import PricingText from "./PricingText";
import Pricing from "./Pricing";
import FAQs from "./FAQs";
import CTA from "./CTA";
import Footer from "./Footer";
import LoadingScreen from "./Loader";

import {Box, Container, CssBaseline, ThemeProvider} from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { Element } from 'react-scroll';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpen, faFile, faListCheck, faChartPie, faPersonDigging, faChartLine, faStar, faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faEnvelopeOpen, faFile, faListCheck, faChartPie, faPersonDigging, faChartLine, faStar, faPlus)

const theme = createTheme({
    palette: {
        primary: {
            light: '#4e644e',
            main: '#223E22',
            dark: '#172b17',
            contrastText: '#86f77c',
        },
        secondary: {
            light: '#bd739f',
            main: '#ad5187',
            dark: '#79385e',
            contrastText: '#fff',
        },
    },
});

function LandingPage() {
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg" className="Container">
                <Box sx={{ height: 'auto', mx: 2, }} >
                    <CssBaseline />
                    <Header/>
                    <Hero/>
                    <Element name="about-us">
                        <AboutUsText/>
                        <AboutUs/>
                    </Element>
                </Box>
            </Container>
            <Element name="how-it-works">
                <Slider/>
                <Features/>
            </Element>
            <Element name="pricing">
                <PricingText/>
                <Pricing/>
            </Element>
            <Element name="faqs">
                <Container maxWidth="lg" className="Container" style={{padding: 0}}>
                    <Box sx={{ height: 'auto', mx: 2, }} >
                        <FAQs/>
                    </Box>
                </Container>
            </Element>
            <Container maxWidth="lg" className="Container" style={{padding: 0}}>
                <Box sx={{ height: 'auto', mx: 2, }} >
                    <CssBaseline />
                    <CTA/>
                    <Footer/>
                </Box>
            </Container>
            <LoadingScreen />
        </ThemeProvider>
    );
}

export default LandingPage;