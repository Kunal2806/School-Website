import { useState } from "react";

const Slider = () => {
  const banners = [
    "./images/Banner 01.jpg",
    "./images/Banner 02.jpg",
    "./images/Banner 03.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative h-[400px] w-[95%] m-auto mt-10 overflow-hidden rounded-xl">
      {/* Background image */}
      <img
        src={banners[currentIndex]}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover blur-sm brightness-75"
      />

      {/* Foreground image */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <img
          src={banners[currentIndex]}
          alt={`banner-${currentIndex}`}
          className="h-[90%] object-contain drop-shadow-xl transition-all duration-500 rounded-md"
        />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 cursor-pointer transform -translate-y-1/2 z-20 bg-white/70 hover:bg-white text-black px-3 py-1 rounded-full shadow"
      >
        {"<"}
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 cursor-pointer transform -translate-y-1/2 z-20 bg-white/70 hover:bg-white text-black px-3 py-1 rounded-full shadow"
      >
        {">"}
      </button>
    </div>
  );
};

export default Slider;
