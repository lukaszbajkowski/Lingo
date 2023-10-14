import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {Link as RouterLink} from 'react-router-dom';
import logo from '../images/logo-no-background.png';
import '../styles_components/style_header.scss';
import useMediaQuery from '@mui/material/useMediaQuery';
import {Link} from 'react-scroll';
import AnimatedElement from "../AnimatedElementOnce";
import HeaderButton from "./HeaderButton";

function Header() {
    const isLargeScreen = useMediaQuery('(min-width:1200px)');
    const is600Screen = useMediaQuery('(max-width:600px)');

    const toolbarStyle = {
        justifyContent: 'space-between',
        minHeight: 64,
    };

    const navbarStyle = {
        top: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 16,
        boxShadow: 'none',
        minHeight: 64,
        position: 'fixed',
        width: is600Screen ? 'calc(100% - 80px)' : 'calc(100% - 80px)',
        left: 0,
        right: 0,
        margin: isLargeScreen ? '0px auto' : (is600Screen ? 'auto 40px' : 'auto 40px'),
        padding: is600Screen ? '0px 8px' : '0px 0px',
        zIndex: 1000,
        maxWidth: '1120px',
    };

    return (
        <div>
            <AppBar position="sticky" style={navbarStyle}>
                <Toolbar style={toolbarStyle}>
                    <AnimatedElement className="animated-element-header animated-element-header-delay-100ms">
                        <RouterLink to="/">
                            <img src={logo} alt="Logo" className="App-logo"/>
                        </RouterLink>
                    </AnimatedElement>
                    <HeaderButton/>
                    <AnimatedElement className="animated-element-header animated-element-header-delay-600ms">
                        <Link
                            className="stylebutton"
                            activeClass="active"
                            to="pricing"
                            spy={true}
                            smooth={true}
                            offset={-90}
                            duration={500}
                        >
                            <Button variant="contained" color="primary" component={RouterLink}
                                    className="ButtonGetStarted" to="/start">
                                Rozpocznij
                            </Button>
                        </Link>
                    </AnimatedElement>
                </Toolbar>
            </AppBar>
        </div>
    );
}


export default Header;

