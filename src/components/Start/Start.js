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
import AnimatedElement from "../Animation/AnimatedElementOnce";
import Logo from "./Logo";
import {Link as RouterLink, Link} from "react-router-dom";
import '../styles_components/style_start.scss';
import GoogleLogin from "./GoogleLogin";
import logo from "../Images/logo-no-background.png";

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

function StartPage () {
    const currentTheme = useTheme();
    const isSmallScreen = useMediaQuery(currentTheme.breakpoints.down('md'));
    return (
        <ThemeProvider theme={theme}>
            <div style={{display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center'}}>
                <Grid container style={{height: '100%'}}>
                    {isSmallScreen ? (
                        <>
                            <Grid item xs={12}>
                                <div style={{
                                    width: '100%',
                                    paddingInline: "32px",
                                }}>
                                    <AnimatedElement
                                        className="animated-element-header animated-element animated-element-delay-200ms">
                                        <RouterLink
                                            to="/"
                                            style={{
                                                position: 'absolute',
                                                left: "0%",
                                                transform: 'translate(0%, 100%)',
                                                marginInline: "5%",
                                            }}
                                        >
                                            <img src={logo} alt="Logo" className="App-logo"/>
                                        </RouterLink>
                                    </AnimatedElement>
                                </div>
                            </Grid>
                            <Grid item xs={12} style={{
                                minHeight: "10%",
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Grid container style={{
                                    backgroundColor: '#fff',
                                    padding: '2rem',
                                    marginTop: "100px",
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
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
                        </>
                    ) : (
                        <>
                            <Grid item xs={12} md={6} style={{position: 'relative'}}>
                                <div style={{width: '80%'}}>
                                    <AnimatedElement
                                        className="animated-element-header animated-element animated-element-delay-200ms">
                                        <Logo/>
                                    </AnimatedElement>
                                </div>
                                <Grid container style={{
                                    backgroundColor: '#fff',
                                    padding: '2rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                }}>
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
                        </>
                    )}
                </Grid>
            </div>
        </ThemeProvider>
    );
}

export default StartPage;