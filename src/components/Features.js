import React from 'react';
import './styles_components/style_features.scss';
import {Container, Grid} from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Features() {
    return (
        <Container className="FeaturesContainer">
            <Grid container columnSpacing={{ xs: 2, sm: 8, md: 12 }} rowSpacing={{ xs:3, sm:6, md:8}} className="FeaturesGrid">
                <Grid item xs={12} md={6} className="FeaturesItem">
                    <FontAwesomeIcon icon="envelope-open" className="fa-icon"/>
                    <h1>
                        Actionable Insights
                    </h1>
                    <h5>
                        Our findings aren't just analytical reports; they
                        are actionable insights. We give you concrete
                        improvement points based on actual user
                        behavior, enabling you to implement targeted
                        strategies for product enhancement.
                    </h5>
                </Grid>
                <Grid item xs={12} md={6} className="FeaturesItem">
                    <FontAwesomeIcon icon="list-check" className="fa-icon"/>
                    <h1>
                        UX Expertise
                    </h1>
                    <h5>
                        Our team is composed of UX experts with
                        extensive experience. Their meticulous
                        approach to analyzing countless user session
                        recordings ensures you get the most in-depth
                        and comprehensive insights about your product.
                    </h5>
                </Grid>
                <Grid item xs={12} md={6} className="FeaturesItem">
                    <FontAwesomeIcon icon="chart-pie" className="fa-icon"/>
                    <h1>
                        Actionable Insights
                    </h1>
                    <h5>
                        Our findings aren't just analytical reports; they
                        are actionable insights. We give you concrete
                        improvement points based on actual user
                        behavior, enabling you to implement targeted
                        strategies for product enhancement.
                    </h5>
                </Grid>
                <Grid item xs={12} md={6} className="FeaturesItem">
                    <FontAwesomeIcon icon="fa-file" className="fa-icon"/>
                    <h1>
                        Flexible Services
                    </h1>
                    <h5>
                        We understand the dynamic nature of
                        businesses, and we offer flexible service
                        options. Choose between ad-hoc reports or one
                        of our subscription options to suit your needs.
                    </h5>
                </Grid>
                <Grid item xs={12} md={6} className="FeaturesItem">
                   <FontAwesomeIcon icon="fa-person-digging" className="fa-icon"/>
                    <h1>
                        A Focus on Balance
                    </h1>
                    <h5>
                        Data is critical, but so is human behavior. We
                        champion a balance between data analysis and
                        user behavior observation, eliminating 'paralysis
                        by analysis.'
                    </h5>
                </Grid>
                <Grid item xs={12} md={6} className="FeaturesItem">
                    <FontAwesomeIcon icon="fa-chart-line" className="fa-icon"/>
                    <h1>
                        Continuous Improvement
                    </h1>
                    <h5>
                        With InsightReel, the process of product
                        enhancement is never-ending. We take pride in
                        offering a consistent focus on user behavior
                        analysis, ensuring continuous improvements for
                        your offerings.
                    </h5>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Features;