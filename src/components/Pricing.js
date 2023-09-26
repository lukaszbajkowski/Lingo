import React from 'react';
import './styles_components/style_pricing.scss';
import {Container, Grid, useMediaQuery, useTheme} from "@mui/material";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Pricing() {
    const theme = useTheme();
     const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Container className="PricingContainer">
            <Grid container className="PricingGrid" gap={3}>
                <Grid item
                      xs={12}
                      container
                      direction="row"
                      justifyContent="space-around"
                      alignItems="center"
                      className="PricingItem">
                    <Grid item xs={12} sm={6}>
                        <Grid item xs className="PricingItemFirstRow">
                            À la carte
                        </Grid>
                        <Grid item xs className="PricingItemSecondRow">
                            Pojedynczy raport
                        </Grid>
                        <Grid item xs>
                            Nasza najbardziej elastyczna opcja. Uzyskaj raport na żądanie, kiedy tylko potrzebujesz audytu lub spokoju ducha.
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Grid item xs className="PricingItemValue">
                            $ 999
                            <span className="PricingItemSmallScreen">
                                za raport
                            </span>
                        </Grid>
                        <Grid item xs className="PricingItemButton">
                            <Button variant="contained" color="primary" fullWidth={isSmallScreen}>
                                Zacznij już
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item
                      xs={12}
                      sm={6}
                      lg={4}
                      container
                      direction="row"
                      justifyContent="space-around"
                      alignItems="center"
                      className="PricingItem PricingItemGap">
                    <Grid item xs={12} className="PricingItemGrid">
                        <Grid item xs className="PricingItemFirstRow">
                            Miesięcznie
                        </Grid>
                        <Grid item xs className="PricingItemSecondRow">
                            1 Raport / Miesiąc
                        </Grid>
                        <Grid item xs className="PricingSmallItemValue">
                            $ 799
                            <span className="PricingSmallItemSmallScreen">
                                za miesiąc
                            </span>
                        </Grid>
                        <Grid item xs className="PricingBottom">
                            <div className="PricingBagde">
                                SAVE 20%
                            </div>
                            <div className="PricingCancelInfo">
                                Anuluj w dowolnej chwili
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className="PricingItemBottomGrid">
                        <Grid item xs>
                            Co miesiąc otrzymuj na swoją skrzynkę odbiorczą zaplanowane spostrzeżenia i zagadnienia.
                        </Grid>
                        <Grid item xs className="PricingItemButtonSmallCard">
                            <Button variant="contained" color="primary" fullWidth={true}>
                                Zacznij już
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item
                      xs={12}
                      sm={6}
                      lg={4}
                      container
                      direction="row"
                      justifyContent="space-around"
                      alignItems="center"
                      className="PricingItem PricingItemGap">
                    <Grid item xs={12} className="PricingItemGrid">
                        <div className="PricingMostPopluar">
                            <FontAwesomeIcon icon="fa-star" className="fa-star"/>
                            Najpopularniejsze
                            <FontAwesomeIcon icon="fa-star" className="fa-star"/>
                        </div>
                        <Grid item xs className="PricingItemFirstRow">
                            Dwutygodniowo
                        </Grid>
                        <Grid item xs className="PricingItemSecondRow">
                            2 Raporty / Miesiąc
                        </Grid>
                        <Grid item xs className="PricingSmallItemValue">
                            $1399
                            <span className="PricingSmallItemSmallScreen">
                                za miesiąc
                            </span>
                        </Grid>
                        <Grid item xs className="PricingBottom">
                            <div className="PricingBagde">
                                SAVE 30%
                            </div>
                            <div className="PricingCancelInfo">
                                Anuluj w dowolnej chwili
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className="PricingItemBottomGrid">
                        <Grid item xs>
                            Co dwa tygodnie otrzymasz na swoją skrzynkę pocztową nasze najważniejsze informacje i spostrzeżenia.
                        </Grid>
                        <Grid item xs className="PricingItemButtonSmallCard">
                            <Button variant="contained" color="primary" fullWidth={true}>
                                Zacznij już
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item
                      xs={12}
                      sm={6}
                      lg={4}
                      container
                      direction="row"
                      justifyContent="space-around"
                      alignItems="center"
                      className="PricingItem PricingItemGap"
                      style={{marginInline: "auto"}}>
                    <Grid item xs={12} className="PricingItemGrid">
                        <Grid item xs className="PricingItemFirstRow">
                            Tygodniowo
                        </Grid>
                        <Grid item xs className="PricingItemSecondRow">
                            4 Raporty / Miesiąc
                        </Grid>
                        <Grid item xs className="PricingSmallItemValue">
                            $ 1999
                            <span className="PricingSmallItemSmallScreen">
                                za miesiąc
                            </span>
                        </Grid>
                        <Grid item xs className="PricingBottom">
                            <div className="PricingBagde">
                                SAVE 50%
                            </div>
                            <div className="PricingCancelInfo">
                                Anuluj w dowolnej chwili
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className="PricingItemBottomGrid">
                        <Grid item xs>
                            Bądź na bieżąco z każdą pojawiającą się kwestią, dzięki cotygodniowemu raportowi z aktualizacjami.
                        </Grid>
                        <Grid item xs className="PricingItemButtonSmallCard">
                            <Button variant="contained" color="primary" fullWidth={true}>
                                Zacznij już
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Pricing;


