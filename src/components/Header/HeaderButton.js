import {Grid} from "@mui/material";
import AnimatedElement from "../AnimatedElementOnce";
import {Link} from "react-scroll";
import Button from "@mui/material/Button";
import React from "react";
import { useLocation } from "react-router-dom";

function HeaderButton() {
    const location = useLocation();

    return (
        <div className="HeaderButton">
            <Grid container spacing={2} style={{ marginLeft: 0, width: 'auto' }}>
                {location.pathname === "/" ? (
                    <>
                    <Grid item style={{ paddingLeft: 0 }}>
                        <AnimatedElement className="animated-element-header animated-element-header-delay-200ms">
                            <Link
                                activeClass="active"
                                to="about-us"
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
                                    O nas
                                </Button>
                            </Link>
                        </AnimatedElement>
                    </Grid>

                    <Grid item style={{ paddingLeft: 0 }}>
                        <AnimatedElement className="animated-element-header animated-element-header-delay-300ms">
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
                        <AnimatedElement className="animated-element-header animated-element-header-delay-400ms">
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
                        <AnimatedElement className="animated-element-header animated-element-header-delay-500ms">
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
                    </>
                ) : (
                    <></>
                )}
            </Grid>
        </div>
    )
}

export default HeaderButton;