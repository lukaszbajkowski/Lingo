import React, {useEffect, useState} from "react";
import {Box, Container, CssBaseline, ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import {useParams} from "react-router-dom";
import PostStructure from "./PostStructure";
import Footer from "../Footer/Footer";
import axios from "../../axios";
import HeaderUser from "../BlogUser/Components/Header/HeaderUser";

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

function PostPage ({match}) {
    const {id} = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`/posts/${id}`)
            .then((response) => {
                setPost(response.data);
            })
            .catch((error) => {
                console.error("Błąd podczas pobierania treści postu:", error);
            });
    }, [id]);

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg" className="Container">
                <Box sx={{height: 'auto', mx: 2,}}>
                    <CssBaseline/>
                    <HeaderUser/>
                    {post ? (
                        <PostStructure post={post}/>
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

export default PostPage;
