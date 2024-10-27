"use client";
import { useEffect, useState, useRef } from "react";

export function SlideInText({ text }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          setTimeout(() => {
            setIsVisible(false);
          }, 3000);
        }
      },
      { threshold: 0.8 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`inline-block flex z-10  ${
        isVisible ? "animate-slidein" : ""
      }`}
    >
      {text}
    </div>
  );
}

export default SlideInText;
