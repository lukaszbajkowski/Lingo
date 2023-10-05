import React from 'react';
import { Container, Grid } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles_components/style_features.scss';
import AnimatedElement from "./AnimatedElementOnce";

const featuresData = [
    {
        icon: "envelope-open",
        title: "Actionable Insights",
        description: "Our findings aren't just analytical reports; they are actionable insights. We give you concrete improvement points based on actual user behavior, enabling you to implement targeted strategies for product enhancement.",
    },
    {
        icon: "list-check",
        title: "UX Expertise",
        description: "Our team is composed of UX experts with extensive experience. Their meticulous approach to analyzing countless user session recordings ensures you get the most in-depth and comprehensive insights about your product.",
    },
    {
        icon: "chart-pie",
        title: "Actionable Insights",
        description: "Our findings aren't just analytical reports; they are actionable insights. We give you concrete improvement points based on actual user behavior, enabling you to implement targeted strategies for product enhancement.",
    },
    {
        icon: "fa-file",
        title: "Flexible Services",
        description: "We understand the dynamic nature of businesses, and we offer flexible service options. Choose between ad-hoc reports or one of our subscription options to suit your needs.",
    },
    {
        icon: "fa-person-digging",
        title: "A Focus on Balance",
        description: "Data is critical, but so is human behavior. We champion a balance between data analysis and user behavior observation, eliminating 'paralysis by analysis.'",
    },
    {
        icon: "fa-chart-line",
        title: "Continuous Improvement",
        description: "With InsightReel, the process of product enhancement is never-ending. We take pride in offering a consistent focus on user behavior analysis, ensuring continuous improvements for your offerings.",
    },
];

function FeatureItem({ icon, title, description }) {
    return (
        <AnimatedElement className="animated-element animated-element-delay-100ms">
            <FontAwesomeIcon icon={icon} className="fa-icon" />
            <h1>{title}</h1>
            <h5>{description}</h5>
        </AnimatedElement>
    );
}

function Features() {
    return (
        <Container className="FeaturesContainer">
            <Grid container columnSpacing={{ xs: 2, sm: 8, md: 12 }} rowSpacing={{ xs: 3, sm: 6, md: 8 }} className="FeaturesGrid">
                {featuresData.map((feature, index) => (
                    <Grid item xs={12} md={6} className="FeaturesItem" key={index}>
                        <FeatureItem
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Features;
