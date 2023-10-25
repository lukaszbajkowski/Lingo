import React, {useEffect, useRef, useState} from 'react';

const AnimatedElement = ({children, className, speed}) => {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                });
            },
            {
                threshold: speed,
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [speed]);

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
