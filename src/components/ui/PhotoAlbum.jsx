"use client";
import { useState, useEffect } from "react";

const PhotoAlbum = (images) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log((images = []));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default PhotoAlbum;
