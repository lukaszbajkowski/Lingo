import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/scrollbar';
import '../../styles_components/style_slider.scss';
import 'swiper/less/mousewheel';
import {FreeMode, Mousewheel} from 'swiper/modules';
import {Grid} from "@mui/material";
import AnimatedElement from "../../Animation/AnimatedElementOnce";

const Slider = () => {
    const [swiperInstance, setSwiperInstance] = useState(null);

    const adjustSlideHeight = () => {
        if (swiperInstance && swiperInstance.slides) {
            const slides = swiperInstance.slides;

            slides.forEach((slide) => {
                slide.style.height = 'auto';
            });

            let maxHeight = 0;

            slides.forEach((slide) => {
                const slideHeight = slide.offsetHeight;
                if (slideHeight > maxHeight) {
                    maxHeight = slideHeight;
                }
            });

            const windowWidth = window.innerWidth;
            const additionalHeight = windowWidth < 600 ? 100 : 50;
            maxHeight += additionalHeight;

            slides.forEach((slide) => {
                slide.style.height = `${maxHeight}px`;
            });
        }
    };

    useEffect(() => {
        if (swiperInstance) {
            window.addEventListener('resize', adjustSlideHeight);
            adjustSlideHeight();
        }
    }, [swiperInstance]);

    const slidesData = [
        {
            title: "Sign up",
            content: "Start your journey towards product betterment by simply signing up for our service.",
            number: "01"
        },
        {
            title: "Setup Instructions",
            content: "Upon sign-up, you'll receive an email from us with detailed instructions on how to set up or provide us access to your session-recording tool.",
            number: "02"
        },
        {
            title: "Expert Analysis",
            content: "One of our experienced UX experts will delve into your product and session recordings. By observing every click, scroll, and interaction, we will gather a detailed understanding of user behaviors on your platform.",
            number: "03"
        },
        {
            title: "Insights & Improvement",
            content: "We'll transform our observations into a comprehensive report, outlining insightful data and clear points of improvement.",
            number: "04"
        },
        {
            title: "Flexible Reporting Options",
            content: "At InsightReel, we adapt to your needs. You can request detailed reports as a one-off service whenever you need, or choose one of our subscription options for continuous monitoring and reporting.",
            number: "05"
        },
    ];

    return (
        <div>
            <AnimatedElement className="animated-element animated-element-delay-100ms">
                <h1 className="slider-header">
                    Jak to działa
                </h1>
            </AnimatedElement>
            <AnimatedElement className="animated-element animated-element-delay-200ms">
                <Swiper
                    onSwiper={(swiper) => setSwiperInstance(swiper)}
                    freeMode={true}
                    slideToClickedSlide={true}
                    mousewheel={true}
                    modules={[FreeMode, Mousewheel]}
                    style={{marginBlock: 72, padding: 30}}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.3,
                            spaceBetween: 16,
                            slidesOffsetBefore: 8,
                            slidesOffsetAfter: 8,
                        },
                        700: {
                            slidesPerView: 2.3,
                            spaceBetween: 50,
                            slidesOffsetBefore: 100,
                            slidesOffsetAfter: 50
                        },
                        900: {
                            slidesPerView: 2.7,
                            spaceBetween: 50,
                            slidesOffsetBefore: 100,
                            slidesOffsetAfter: 50
                        },
                        1000: {
                            slidesPerView: 2.7,
                            spaceBetween: 50,
                            slidesOffsetBefore: 150,
                            slidesOffsetAfter: 75
                        }
                    }}
                >
                    {slidesData.map((slide, index) => (
                        <SwiperSlide className="swiper-card" key={index}>
                            <Grid container spacing={2} className="swiper-container">
                                <Grid item xs={12} className={`swiper-grid`}>
                                    <h1>{slide.title}</h1>
                                </Grid>
                                <Grid item xs={12} className={`swiper-grid`}>
                                    <p>{slide.content}</p>
                                </Grid>
                                <Grid item xs={12}>
                                    <h4>{slide.number}</h4>
                                </Grid>
                            </Grid>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </AnimatedElement>
        </div>
    );
};

export default Slider;
