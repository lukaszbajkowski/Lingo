import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import '../styles_components/style_header.scss';
import useMediaQuery from '@mui/material/useMediaQuery';
import AnimatedElement from "../AnimatedElementOnce";
import HeaderButton from "./Components/HeaderButton";
import Logo from "./Components/Logo";
import GetStartedButton from "./Components/Buttons/GetStartedButton";
import {useLocation} from "react-router-dom";

function Header() {
    const location = useLocation();

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
                        <Logo/>
                    </AnimatedElement>
                    <HeaderButton/>
                    {location.pathname === "/" ? (
                        <AnimatedElement className="animated-element-header animated-element-header-delay-600ms">
                            <GetStartedButton/>
                        </AnimatedElement>
                    ) : (
                        <AnimatedElement className="animated-element-header animated-element-header-delay-200ms">
                            <GetStartedButton/>
                        </AnimatedElement>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}


export default Header;

