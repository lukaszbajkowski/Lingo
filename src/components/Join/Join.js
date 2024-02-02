import React from "react";
import {Button, Grid, TextField, ThemeProvider, Typography, useMediaQuery, useTheme} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import Logo from "../Start/Logo";
import {Link, useLocation} from "react-router-dom";
import '../styles_components/style_start.scss';
import SideList from "../Start/List";
import GoogleButton from "../Start/GoogleButton";

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

function JoinPage () {
    const currentTheme = useTheme();
    const isSmallScreen = useMediaQuery(currentTheme.breakpoints.down('md'));

    const location = useLocation();

    const isJoinPage = location.pathname === '/join';

    return (
        <ThemeProvider theme={theme}>
            <div className={`start-container`}>
                <Grid container className={`container-height`}>
                    {isSmallScreen && (
                        <Grid item xs={12}>
                            <Logo/>
                        </Grid>
                    )}
                    <Grid item xs={12} md={6} className={`mobile-form-container join-size`}>
                        {!isSmallScreen && (
                            <Logo/>
                        )}
                        <Grid container className={`form-container`}>

                            <form className={`form`}>

                                <Typography
                                    variant="h4"
                                    className={`title-form`}
                                >
                                    Zacznij już teraz
                                </Typography>

                                <Typography
                                    variant={`body1`}
                                    className={`subtitle-form`}
                                >
                                    Masz już konto?&nbsp;
                                    <Link
                                        to={`/start`}
                                        className={`subtitle-link`}
                                    >
                                        Zaloguj się
                                    </Link>
                                </Typography>

                                <div className={`google-button`}>
                                    <GoogleButton isJoinPage={isJoinPage}/>
                                </div>

                                <div className="separator">
                                    Lub w kilka sekund dłużej
                                </div>

                                <TextField
                                    label="Imię"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    sx={{...focusedTextFieldStyle}}
                                />

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

                                <Typography
                                    variant={`body1`}
                                    className={`rules`}
                                >
                                    Klikając, akceptujesz&nbsp;
                                    <Link
                                        to={`/legal/terms-of-service`}
                                        className={`subtitle-link`}
                                    >
                                        Regulamin
                                    </Link>
                                    ,&nbsp;
                                    <Link
                                        to={`/legal/privacy-policy`}
                                        className={`subtitle-link`}
                                    >
                                        Politykę Prywatności
                                    </Link>
                                    &nbsp;i&nbsp;
                                    <Link
                                        to={`/legal/anti-spam-policy`}
                                        className={`subtitle-link`}
                                    >
                                        Politykę Antyspamową
                                    </Link>
                                    .
                                </Typography>

                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    className={`login-button`}
                                >
                                    Zarejestruj się
                                </Button>

                            </form>

                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6} className={`list-item`}>
                        <SideList/>
                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    );
}

export default JoinPage;