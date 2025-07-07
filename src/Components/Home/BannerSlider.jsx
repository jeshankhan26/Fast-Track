import React, { useEffect, useState } from "react";

const BannerSlider = () => {
  const banners = [
   "https://i.ibb.co/b548VnYM/banner1.png",
    "https://i.ibb.co/N6FprR4g/banner2.png",
    "https://i.ibb.co/KxXdmZr0/banner3.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto Slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // Cleanup
  }, [banners.length]);

  return (
    <div className="relative w-full h-[600px] overflow-hidden  shadow-lg mt-5">
      {banners.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Banner ${index + 1}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

      {/* Optional Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
