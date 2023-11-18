import React from 'react';
import '../../styles/style.scss';
import '../styles_components/style_animations.scss';
import {useLocation} from "react-router-dom";

import Footer from "../Footer/Footer";
import ContentUser from "./Components/ContentUser";
import ContentAdmin from "../BlogAdmin/Components/ContentAdmin";
import HeaderAdmin from "../BlogAdmin/Components/Header/HeaderAdmin";
import HeaderUser from "./Components/Header/HeaderUser";

import {Box, Container, CssBaseline, ThemeProvider} from "@mui/material";
import {createTheme} from '@mui/material/styles';

import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {
    faChartLine,
    faChartPie,
    faEnvelopeOpen,
    faFile,
    faListCheck,
    faPersonDigging,
    faPlus,
    faStar
} from '@fortawesome/free-solid-svg-icons'

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

function BlogUser () {
    const location = useLocation();

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg" className="Container">
                <Box sx={{height: 'auto', mx: 2,}}>
                    <CssBaseline/>
                    {location.pathname === "/blog" ? (
                        <div>
                            <HeaderUser/>
                            <ContentUser/>
                        </div>
                    ) : (
                        <div>
                            <HeaderAdmin/>
                            <ContentAdmin/>
                        </div>
                    )}
                </Box>
            </Container>
            <Container maxWidth="lg" className="Container" style={{padding: 0}}>
                <Box sx={{height: 'auto', mx: 2,}}>
                    <Footer/>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default BlogUser;