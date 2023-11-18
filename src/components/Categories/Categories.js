import {Box, Container, CssBaseline, ThemeProvider} from "@mui/material";
import Footer from "../Footer/Footer";
import React from "react";
import {createTheme} from "@mui/material/styles";
import CategoriesContentUser from "./CategoriesContentUser";
import HeaderUser from "../BlogUser/Components/Header/HeaderUser";
import HeaderAdmin from "../BlogAdmin/Components/Header/HeaderAdmin";
import {useLocation} from "react-router-dom";
import CategoriesContentAdmin from "../CategoriesAdmin/CategoriesContentAdmin";

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
    const location = useLocation();

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg" className="Container">
                <Box sx={{height: 'auto', mx: 2,}}>
                    <CssBaseline/>
                    {location.pathname === "/blog" ? (
                        <div>
                            <HeaderUser/>
                            <CategoriesContentUser/>
                        </div>
                    ) : (
                        <div>
                            <HeaderAdmin/>
                            <CategoriesContentAdmin/>
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

export default Categories;