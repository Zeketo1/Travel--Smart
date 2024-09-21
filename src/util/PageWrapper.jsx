import React, { useEffect, useRef, useState } from 'react'

const PageWrapper = ({children}) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if(entry.isIntersecting) {
                        setIsVisible(true);
                    }else {
                        setIsVisible(false);
                    }
                });
            },
            {threshold: 0.2}
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if(sectionRef.current)
                observer.unobserve(sectionRef.current);
        };
    },  []);

  return (
    <div ref={sectionRef}  className={`page ${isVisible ? "slide-in": "" }`}>
        {children}
    </div>
  )
};

export default PageWrapper