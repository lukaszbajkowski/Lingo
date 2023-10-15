import React from 'react';
import '../../../styles_components/style_pricing_text.scss';
import { Container } from "@mui/material";
import AnimatedElement from "../../../Animation/AnimatedElementOnce";

function PricingText() {
    return (
        <AnimatedElement className="animated-element animated-element-delay-100ms">
            <Container>
                <h1 className="header">
                    Ceny
                </h1>
            </Container>
        </AnimatedElement>
    );
}

export default PricingText;


