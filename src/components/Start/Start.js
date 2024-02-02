import React from "react";
import {
    Button,
    Grid,
    List,
    ListItem,
    TextField,
    ThemeProvider,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import Logo from "./Logo";
import {Link} from "react-router-dom";
import '../styles_components/style_start.scss';
import GoogleLogin from "./GoogleLogin";

const theme = createTheme({
    palette: {
        primary: {
            light: '#4e644e',
            main: '#223E22',
            dark: '#172b17',
            contrastText: '#86f77c',
        },
    },
});

// Podział na mniejsze elementy i zrobienie analogicznie rejestracji a następnie do tego zrobic backend/**/

const focusedTextFieldStyle = {
    '& .MuiOutlinedInput-root': {
        borderRadius: '12px',
        color: '#223E22',
        fontFamily: "'Plus Jakarta Sans', sans-serif !important",
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#172b17',
        transition: '0.3s',
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#223E22',
        transition: '0.3s',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiInputBase-input, & .MuiInputLabel-root': {
        color: '#223E22',
        fontFamily: "'Plus Jakarta Sans', sans-serif !important",
        transition: '0.3s',
    },
};

function StartPage () {
    const currentTheme = useTheme();
    const isSmallScreen = useMediaQuery(currentTheme.breakpoints.down('md'));
    return (
        <ThemeProvider theme={theme}>
            <div className={`start-container`}>
                <Grid container className={`container-height`}>
                    {isSmallScreen && (
                        <Grid item xs={12}>
                            <Logo/>
                        </Grid>
                    )}
                    <Grid item xs={12} md={6} className={`mobile-form-container`}>
                        {!isSmallScreen && (
                            <Logo/>
                        )}
                        <Grid container className={`form-container`}>

                            <form className={`form`}>

                                <Typography
                                    variant="h4"
                                    className={`title-form`}
                                >
                                    Witamy ponownie
                                </Typography>

                                <Typography
                                    variant={`body1`}
                                    className={`subtitle-form`}
                                >
                                    Nie posiadasz konta?&nbsp;
                                    <Link
                                        to={`/join`}
                                        className={`subtitle-link`}
                                    >
                                        Zarejestruj się
                                    </Link>
                                </Typography>

                                <div className={`google-button`}>
                                    <GoogleLogin/>
                                </div>

                                <div className="separator">
                                    Lub za pomocą adresu e-mail i hasła
                                </div>

                                <TextField
                                    label="Adres e-mail"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    sx={{...focusedTextFieldStyle}}
                                />

                                <TextField
                                    label="Hasło"
                                    variant="outlined"
                                    fullWidth margin="normal"
                                    type="password"
                                    sx={{...focusedTextFieldStyle}}
                                />

                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    className={`login-button`}
                                >
                                    Zaloguj się
                                </Button>

                            </form>

                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6} className={`list-item`}>

                        <List className={`list-container`}>

                            <ListItem className={`list`}>
                                <Typography
                                    variant="h3"
                                    className={`title-list`}
                                >
                                    Unlock the power of AI with Vector Search
                                </Typography>
                            </ListItem>

                            <ListItem>
                                <Typography
                                    variant={`body1`}
                                    className={`learn-more`}
                                >
                                    Introducing Vector Search. Build intelligent applications powered by
                                    semantic search and generative AI over any type of data.
                                </Typography>
                            </ListItem>

                            <ListItem>
                                <Typography
                                    variant={`body1`}
                                    className={`learn-more learn-more-small`}
                                >
                                    <Link
                                        to={`/join`}
                                        className={`subtitle-link`}
                                    >
                                        Learn more
                                    </Link>
                                </Typography>
                            </ListItem>

                        </List>

                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    );
}

export default StartPage;