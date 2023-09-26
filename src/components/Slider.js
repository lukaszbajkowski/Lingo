import React, {useEffect, useRef, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/scrollbar';
import './styles_components/style_slider.scss';

import 'swiper/less/mousewheel'
import { FreeMode, Mousewheel } from 'swiper/modules';
import {Grid} from "@mui/material";

const Slider = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;

    // Funkcja dostosowująca wysokość slajdów do najwyższego slajdu z dodatkowymi pikselami
    const adjustSlideHeight = () => {
      const slides = swiper.slides;

      // Wyzeruj wysokość wszystkich slajdów
      slides.forEach((slide) => {
        slide.style.height = 'auto';
      });

      let maxHeight = 0;

      // Znajdź najwyższy slajd na podstawie aktualnej szerokości ekranu
      slides.forEach((slide) => {
        const slideHeight = slide.offsetHeight;
        if (slideHeight > maxHeight) {
          maxHeight = slideHeight;
        }
      });

      // Dodaj 50px do maksymalnej wysokości (lub 100px, jeśli szerokość ekranu jest poniżej 600px)
      const windowWidth = window.innerWidth;
      const additionalHeight = windowWidth < 600 ? 100 : 50;
      maxHeight += additionalHeight;

      // Ustaw wszystkie slajdy na wysokość najwyższego slajdu z dodatkowymi pikselami
      slides.forEach((slide) => {
        slide.style.height = `${maxHeight}px`;
      });
    };

    // Wywołaj funkcję dostosowującą wysokość przy zmianie szerokości ekranu
    window.addEventListener('resize', adjustSlideHeight);

    // Wywołaj funkcję dostosowującą wysokość na początku
    adjustSlideHeight();

    // Funkcja obsługująca przewijanie kółkiem myszy
    const handleMouseWheel = (event) => {
      if (swiper.isBeginning || swiper.isEnd) {
        // Jeśli jesteśmy na pierwszym lub ostatnim slajdzie, przewiń stronę
        if (event.deltaY > 0) {
          // Przewij w dół
          window.scrollBy(0, 100); // Możesz dostosować wartość przewijania
        } else {
          // Przewij w górę
          window.scrollBy(0, -100); // Możesz dostosować wartość przewijania
        }
      }
    };

    // Dodaj nasłuchiwanie na kółko myszy
    window.addEventListener('wheel', handleMouseWheel);

    // Usuwanie nasłuchiwania po odmontowaniu komponentu
    return () => {
      window.removeEventListener('resize', adjustSlideHeight);
      window.removeEventListener('wheel', handleMouseWheel);
    };
  }, []);


  return (
    <div>
      <h1 className="slider-header">
        Jak to działa
      </h1>
      <Swiper
        ref={swiperRef}
        freeMode={true}
        slideToClickedSlide={true}
        mousewheel={true}
        // centeredSlides={true}
        modules={[FreeMode, Mousewheel]}
        style={{marginBlock: 72, padding: 30}}
        breakpoints={{
            0 : {
              slidesPerView: 1.3,
              spaceBetween: 16,
              slidesOffsetBefore: 0,
              slidesOffsetAfter: 0,
              // centeredSlides: true,
            },
            700 : {
              slidesPerView: 2.3,
              spaceBetween: 50,
              slidesOffsetBefore: 100,
              slidesOffsetAfter: 0
            },
            900: {
              slidesPerView: 2.7,
              spaceBetween: 50,
              slidesOffsetBefore: 100,
              slidesOffsetAfter: 0
            },
            1000: {
              slidesPerView: 2.7,
              spaceBetween: 50,
              slidesOffsetBefore: 150,
              slidesOffsetAfter: 0
            }
          }}
      >
        <SwiperSlide className="swiper-card">
          <Grid container spacing={2} className="swiper-container">
              <Grid item xs={12}>
                <h1>
                  Sign up
                </h1>
              </Grid>
            <Grid item xs={12}>
              <p>
                Start your journey towards product betterment by simply signing up for our service.
              </p>
            </Grid>
              <Grid item xs={12}>
              <h4>
                01
              </h4>
            </Grid>
          </Grid>
        </SwiperSlide>
        <SwiperSlide className="swiper-card">
          <Grid container spacing={2} className="swiper-container">
              <Grid item xs={12}>
                <h1>
                  Setup Instructions
                </h1>
              </Grid>
            <Grid item xs={12}>
              <p>
                Upon sign-up, you'll receive an email from us with detailed instructions on how to set up or provide us access to your session-recording tool.
              </p>
            </Grid>
              <Grid item xs={12}>
              <h4>
                02
              </h4>
            </Grid>
          </Grid>
        </SwiperSlide>
        <SwiperSlide className="swiper-card">
          <Grid container spacing={2} className="swiper-container">
              <Grid item xs={12}>
                <h1>
                  Expert Analysis
                </h1>
              </Grid>
            <Grid item xs={12}>
              <p>
                One of our experienced UX experts will delve into your product and session recordings. By observing every click, scroll, and interaction, we will gather a detailed understanding of user behaviors on your platform.
              </p>
            </Grid>
              <Grid item xs={12}>
              <h4>
                03
              </h4>
            </Grid>
          </Grid>
        </SwiperSlide>
        <SwiperSlide className="swiper-card">
          <Grid container spacing={2} className="swiper-container">
              <Grid item xs={12}>
                <h1>
                  Insights & Improvement
                </h1>
              </Grid>
            <Grid item xs={12}>
              <p>
                We'll transform our observations into a comprehensive report, outlining insightful data and clear points of improvement.
              </p>
            </Grid>
              <Grid item xs={12}>
              <h4>
                04
              </h4>
            </Grid>
          </Grid>
        </SwiperSlide>
        <SwiperSlide className="swiper-card">
          <Grid container spacing={2} className="swiper-container">
              <Grid item xs={12}>
                <h1>
                  Flexible Reporting Options
                </h1>
              </Grid>
            <Grid item xs={12}>
              <p>
                At InsightReel, we adapt to your needs. You can request detailed reports as a one-off service whenever you need, or choose one of our subscription options for continuous monitoring and reporting.
              </p>
            </Grid>
              <Grid item xs={12}>
              <h4>
                05
              </h4>
            </Grid>
          </Grid>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
