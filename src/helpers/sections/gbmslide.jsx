"use client"
import React, { useEffect, useState } from "react";
import SwiperrBanner from "../components/swiperr/swiperrBanner";

const GBMSlide = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/dummyImages.json");
        const data = await res.json();
        setImages(data.map((img) => img.url));
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-6">
      <div className="mx-auto w-[95%] max-w-7xl">
        <div className="mx-auto w-full">
          {images.length > 0 ? (
            <SwiperrBanner eff="cards" preview={1} images={images} />
          ) : (
            <p className="text-center text-gray-500">HT-NSBE ...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default GBMSlide;
