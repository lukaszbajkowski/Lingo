import React from 'react';
import '../../styles/style.scss';
import '../styles_components/style_animations.scss';

import Header from '../Header/Header';
import Footer from "../Footer/Footer";
import Content from "./Components/Content";
import LoadingScreen from "../Loader/Loader";

import {Box, Container, CssBaseline, ThemeProvider} from "@mui/material";
import { createTheme } from '@mui/material/styles';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpen, faFile, faListCheck, faChartPie, faPersonDigging, faChartLine, faStar, faPlus } from '@fortawesome/free-solid-svg-icons'
import Features from "../LandingPage/Components/Features";

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

function Blog() {
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg" className="Container">
                <Box sx={{ height: 'auto', mx: 2, }} >
                    <CssBaseline />
                    <Header/>
                    <Content/>
                    <Content/>
                </Box>
            </Container>
            <Container maxWidth="lg" className="Container" style={{padding: 0}}>
                <Box sx={{ height: 'auto', mx: 2, }} >
                    <Footer/>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Blog;