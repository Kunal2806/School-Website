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
    <div className="relative w-[95%] mx-auto mt-8 rounded-xl overflow-hidden h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px]">
      <img
        src={banners[currentIndex]}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover blur-sm brightness-75"
      />

      <div className="relative z-10 flex items-center justify-center h-full">
        <img
          src={banners[currentIndex]}
          alt={`banner-${currentIndex}`}
          className="h-[80%] sm:h-[85%] md:h-[90%] object-contain drop-shadow-xl transition-all duration-500 rounded-md"
        />
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/70 hover:bg-white text-black px-3 py-1 rounded-full shadow text-xl sm:text-2xl"
      >
        {"<"}
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/70 hover:bg-white text-black px-3 py-1 rounded-full shadow text-xl sm:text-2xl"
      >
        {">"}
      </button>
    </div>
  );
};

export default Slider;
