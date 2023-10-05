import React, { useRef, useEffect, useState } from 'react';
import {Grid} from "@mui/material";

const AnimatedElement = ({ children, className, threshold = 0.1 }) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: threshold,
      }
    );

    observer.observe(elementRef.current);

    return () => {
      observer.unobserve(elementRef.current);
    };
  }, []);

  return (
    <Grid
        item
      className={`${className} ${isVisible ? 'visible' : 'exit'}`}
      ref={elementRef}

    >
      {children}
    </Grid>
  );
};

export default AnimatedElement;
