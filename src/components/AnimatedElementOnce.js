import React, { useRef, useEffect, useState } from 'react';

const AnimatedElement = ({ children, className }) => {
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
        threshold: .1, // Dostosuj ten próg według potrzeb
      }
    );

    observer.observe(elementRef.current);

    return () => {
      observer.unobserve(elementRef.current);
    };
  }, []);

  return (
    <div
      className={`${className} ${isVisible ? 'visible' : 'exit'}`}
      ref={elementRef}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
