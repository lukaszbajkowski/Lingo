// src/components/Header.js
import React, {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import {Grid, Stack} from "@mui/material";
import logo from './images/logo-no-background.png';
import './styles_components/style_header.scss';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-scroll';
import AnimatedElement from "./AnimatedElementOnce";


function Header() {

  const isLargeScreen = useMediaQuery('(min-width:1200px)');
  const is600Screen = useMediaQuery('(max-width:600px)');
  const isScreenSmall = useMediaQuery('(max-width:700px)');

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
    width: is600Screen ? 'calc(100% - 64px)' : 'calc(100% - 80px)',
    left: 0,
    right: 0,
    margin: isLargeScreen ? '0px auto' : (is600Screen ? 'auto 32px' : 'auto 40px'),
    zIndex: 1000,
    maxWidth: '1120px',
  };



  const [offset, setOffset] = useState(70);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) {
        setOffset(-50);
      } else {
        setOffset(70);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <AppBar position="sticky" style={navbarStyle}>
        <Toolbar style={toolbarStyle}>
          <AnimatedElement className="animated-logo-delay-100ms">
            <Typography variant="h6" component={RouterLink} to="/" style={{ textDecoration: 'none', color: 'white' }}>
              <img src={logo} alt="Logo" className="App-logo" />
            </Typography>
          </AnimatedElement>
          {isScreenSmall ? null : (
            <Grid container spacing={2} style={{ marginLeft: 0, width: 'auto' }}>
              <Grid item style={{ paddingLeft: 0 }}>
                <AnimatedElement className="animated-element-header-delay-200ms">
                  <Link
                    activeClass="active"
                    to="about-us"
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration={500}
                  >
                    <Button
                      variant="text"
                      color="inherit"
                      className="column-button"
                    >
                      O nas
                    </Button>
                  </Link>
                </AnimatedElement>
              </Grid>

              <Grid item style={{ paddingLeft: 0 }}>
                <AnimatedElement className="animated-element-header-delay-200ms">
                  <Link
                    className="stylebutton"
                    activeClass="active"
                    to="how-it-works"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                  >
                    <Button
                      variant="text"
                      color="inherit"
                      className="column-button"
                    >
                      Jak to działa
                    </Button>
                  </Link>
                </AnimatedElement>
              </Grid>

              <Grid item style={{ paddingLeft: 0 }}>
                <AnimatedElement className="animated-element-header-delay-200ms">
                  <Link
                    className="stylebutton"
                    activeClass="active"
                    to="pricing"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                  >
                    <Button
                      variant="text"
                      color="inherit"
                      className="column-button"
                    >
                      Ceny
                    </Button>
                  </Link>
                </AnimatedElement>
              </Grid>

              <Grid item style={{ paddingLeft: 0 }}>
                <AnimatedElement className="animated-element-header-delay-200ms">
                  <Link
                    className="stylebutton"
                    activeClass="active"
                    to="faqs"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                  >
                    <Button
                      variant="text"
                      color="inherit"
                      className="column-button"
                    >
                      FAQs
                    </Button>
                  </Link>
                </AnimatedElement>
              </Grid>
            </Grid>
          )}
          <AnimatedElement className="animated-element-header-delay-200ms">
            <Button variant="contained" color="primary" component={RouterLink} className="ButtonGetStarted" to="/start">
              Rozpocznij
            </Button>
          </AnimatedElement>
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default Header;

