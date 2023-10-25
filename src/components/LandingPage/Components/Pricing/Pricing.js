import React from 'react';
import '../../../styles_components/style_pricing.scss';
import {Container, Grid, useMediaQuery, useTheme} from "@mui/material";
import Button from "@mui/material/Button";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import AnimatedElement from "../../../Animation/AnimatedElementOnce";

function Pricing () {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const pricingItems = [
        {
            title: 'À la carte',
            subtitle: 'Pojedynczy raport',
            description: 'Nasza najbardziej elastyczna opcja. Uzyskaj raport na żądanie, kiedy tylko potrzebujesz audytu lub spokoju ducha.',
            price: '$ 999',
            discountBadge: null,
            cancelInfo: null,
        },
        {
            title: 'Miesięcznie',
            subtitle: '1 Raport / Miesiąc',
            description: 'Co miesiąc otrzymuj na swoją skrzynkę odbiorczą zaplanowane spostrzeżenia i zagadnienia.',
            price: '$ 799',
            discountBadge: 'SAVE 20%',
            cancelInfo: 'Anuluj w dowolnej chwili',
        },
        {
            title: 'Dwutygodniowo',
            subtitle: '2 Raporty / Miesiąc',
            description: 'Co dwa tygodnie otrzymasz na swoją skrzynkę pocztową nasze najważniejsze informacje i spostrzeżenia.',
            price: '$1399',
            discountBadge: 'SAVE 30%',
            cancelInfo: 'Anuluj w dowolnej chwili',
            mostPopular: true,
        },
        {
            title: 'Tygodniowo',
            subtitle: '4 Raporty / Miesiąc',
            description: 'Bądź na bieżąco z każdą pojawiającą się kwestią, dzięki cotygodniowemu raportowi z aktualizacjami.',
            price: '$ 1999',
            discountBadge: 'SAVE 50%',
            cancelInfo: 'Anuluj w dowolnej chwili',
        },
    ];

    return (
        <Container className="PricingContainer">
            <AnimatedElement className="animated-element animated-element-delay-200ms">
                <Grid container className="PricingGrid" gap={3}>
                    {pricingItems.map((item, index) => (
                        index === 0 ? (
                            <Grid item
                                  key={index}
                                  xs={12}
                                  container
                                  direction="row"
                                  justifyContent="space-around"
                                  alignItems="center"
                                  className="PricingItem"
                            >
                                <Grid item xs={12} sm={6}>
                                    <Grid item xs className="PricingItemFirstRow">
                                        {item.title}
                                    </Grid>
                                    <Grid item xs className="PricingItemSecondRow">
                                        {item.subtitle}
                                    </Grid>
                                    <Grid item xs>
                                        {item.description}
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Grid item xs className="PricingItemValue">
                                        {item.price}
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
                        ) : (
                            <Grid
                                key={index}
                                item
                                xs={12}
                                sm={6}
                                lg={4}
                                container
                                direction="row"
                                justifyContent="space-around"
                                alignItems="center"
                                className="PricingItem PricingItemGap"
                                style={{marginInline: "auto"}}
                            >
                                {item.mostPopular && (
                                    <div className="PricingMostPopluar">
                                        <FontAwesomeIcon icon="fa-star" className="fa-star"/>
                                        Najpopularniejsze
                                        <FontAwesomeIcon icon="fa-star" className="fa-star"/>
                                    </div>
                                )}

                                <Grid item xs={12} className="PricingItemGrid">
                                    <Grid item xs className="PricingItemFirstRow">
                                        {item.title}
                                    </Grid>
                                    <Grid item xs className="PricingItemSecondRow">
                                        {item.subtitle}
                                    </Grid>
                                    <Grid item xs className="PricingSmallItemValue">
                                        {item.price}
                                        <span className="PricingSmallItemSmallScreen">
                                            za miesiąc
                                        </span>
                                    </Grid>
                                    <Grid item xs className="PricingBottom">
                                        <div className="PricingBagde">
                                            {item.discountBadge}
                                        </div>
                                        <div className="PricingCancelInfo">
                                            {item.cancelInfo}
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} className="PricingItemBottomGrid">
                                    <Grid item xs>
                                        {item.description}
                                    </Grid>
                                    <Grid item xs className="PricingItemButtonSmallCard">
                                        <Button variant="contained" color="primary" fullWidth={true}>
                                            Zacznij już
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        )
                    ))}
                </Grid>
            </AnimatedElement>
        </Container>
    );
}

export default Pricing;


