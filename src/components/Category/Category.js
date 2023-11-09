import React, {useEffect, useState} from "react";
import {Box, Container, CssBaseline, ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import {useParams} from "react-router-dom";
import axios from "../../axios";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

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

function CategoryPage ({match}) {
    const {id} = useParams(); // Użyj hooka useParams do pobrania 'id' z URL
    const [category, setCategory] = useState(null);

    useEffect(() => {
        // Pobierz treść postu na podstawie 'id' i ustaw w stanie komponentu
        axios.get(`/categories/${id}`)
            .then((response) => {
                setCategory(response.data);
            })
            .catch((error) => {
                console.error("Błąd podczas pobierania treści kategorii:", error);
            });
    }, [id]);

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg" className="Container">
                <Box sx={{height: 'auto', mx: 2,}}>
                    <CssBaseline/>
                    <Header/>
                    {category ? (
                        <div>
                            <h1>{category.name}</h1>
                            <p>{category.description}</p>
                        </div>
                    ) : (
                        <p>Ładowanie...</p>
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

export default CategoryPage;
