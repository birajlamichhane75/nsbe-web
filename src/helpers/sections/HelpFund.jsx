"use client"
import React, { useEffect, useState } from "react";
import CommonSection1 from "../ui/CommonSection1";
import Swiper from "../components/swiperr/Swiper";
import Link from "next/link";

const HelpFund = () => {
  const [images, setImages] = useState([]);
  
  // Dummy placeholder image while loading
  const dummyImage = ["/images/no-image.jpg"];

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/dummyHelpFundImages.json");
        const data = await res.json();
        setImages(data.map(img => img.url));
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="bg-black rounded-3xl mx-4 py-10">
      <CommonSection1>
        <div className="flex flex-col gap-10">
          <div>
            <p className="text-2xl md:text-3xl text-yellow-400 font-semibold text-center mb-4">
              The mission of the National Society of Black Engineers is
            </p>
            <p className="text-lg md:text-xl text-yellow-200 text-center italic">
              “to increase the number of culturally responsible Black Engineers who excel academically, succeed professionally and positively impact the community.”
            </p>
          </div>
          <div className="mx-auto w-full rounded-xl overflow-hidden shadow-lg border-4 border-yellow-400">
            <Swiper 
              eff="cube" 
              preview={1} 
              images={images.length > 0 ? images : dummyImage} 
            />
          </div>
          <div className="flex justify-center">
            <Link href="/contact">
              <button
                type="button"
                className="text-black shadow-sm shadow-yellow-400 bg-yellow-400 hover:bg-yellow-500 font-bold rounded-full text-lg px-8 py-3 uppercase transition duration-300"
              >
                Help fund our mission!
              </button>
            </Link>
          </div>
        </div>
      </CommonSection1>
    </div>
  );
};

export default HelpFund;
