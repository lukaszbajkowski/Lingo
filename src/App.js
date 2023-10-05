import React from 'react';
import './styles/style.scss';
import './components/styles_components/style_animations.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import AboutUsText from './components/AboutUsText'
import Slider from './components/Slider'
import Features from "./components/Features";
import PricingText from "./components/PricingText";
import Pricing from "./components/Pricing";
import FAQs from "./components/FAQs";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

import {Box, Container, CssBaseline, ThemeProvider} from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { Element } from 'react-scroll';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpen, faFile, faListCheck, faChartPie, faPersonDigging, faChartLine, faStar, faPlus } from '@fortawesome/free-solid-svg-icons'
import LoadingScreen from "./components/Loader";

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

function App() {
    return (
        <Router>
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
        </Router>
    );
}

export default App;
