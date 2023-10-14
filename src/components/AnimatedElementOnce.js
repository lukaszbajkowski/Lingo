import React, { useRef, useEffect, useState } from 'react';
import { Grid } from "@mui/material";

const AnimatedElement = ({ children, className, threshold = 0.1 }) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
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

    observerRef.current.observe(elementRef.current);

    return () => {
      if (observerRef.current && elementRef.current) {
        observerRef.current.unobserve(elementRef.current);
      }
    };
  }, [threshold]);

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
