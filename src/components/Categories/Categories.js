import {Box, Container, CssBaseline, ThemeProvider} from "@mui/material";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React from "react";
import {createTheme} from "@mui/material/styles";
import CategoriesContent from "./CategoriesContent";

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

function Categories () {
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg" className="Container">
                <Box sx={{height: 'auto', mx: 2,}}>
                    <CssBaseline/>
                    <Header/>
                    <CategoriesContent/>
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

export default Categories;