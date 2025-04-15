import React, { useState, useRef, useEffect } from "react";

const LazyImage = ({ src, alt, className = "", ...rest }) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            imgRef.current.src = src;
            obs.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [src]);

  return (
    <img
      ref={imgRef}
      alt={alt}
      className={`${className} ${loaded ? "fade-in" : "fade-out"}`}
      onLoad={() => setLoaded(true)}
      {...rest}
    />
  );
};

export default LazyImage;
