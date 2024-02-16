import React, { useEffect, useState } from "react";

import Searchonslide from "./Searchonslide";

import { FcNext, FcPrevious } from "react-icons/fc";

const url1 = "";
const url2 = "";
const url3 = "";
const url4 = "";
const url5 = "";

const ImageItemsDesktop = [
  url1,
  url2,
  url3,
  url4,
  url5,
];

const ImageItemsPhone = [
    url1,
  url2,
  url3,
  url4,
  url5,
];
const Slides = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // go to next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === ImageItemsDesktop.length - 1 ? 0 : prevIndex + 1
    );
  };

  // go to previous slides
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? ImageItemsDesktop.length - 1 : prevIndex - 1
    );
  };

  // automatic sliding every 2 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // jump to specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="space-y-3 relative md:flex items-center">
      <aside className="slide-items w-full">
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="hidden md:flex transition-transform duration-500 transform"
              style={{
                width: `${ImageItemsDesktop.length * 100}%`,
                transform: `translateX(-${
                  currentIndex * (100 / ImageItemsDesktop.length)
                }%)`,
              }}
            >
              {ImageItemsDesktop.map((image, index) => (
                <div
                  key={index}
                  className="w-1/3 flex-shrink-0"
                  style={{ width: `${100 / ImageItemsDesktop.length}%` }}
                >
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    width="100%"
                    height="100%"
                    className="hidden md:block rounded-xl max-h-96"
                  />
                </div>
              ))}
            </div>
            <div
              className="flex md:hidden transition-transform duration-500 transform"
              style={{
                width: `${ImageItemsPhone.length * 100}%`,
                transform: `translateX(-${
                  currentIndex * (100 / ImageItemsPhone.length)
                }%)`,
              }}
            >
              {ImageItemsPhone.map((image, index) => (
                <div
                  key={index}
                  className="w-1/3 flex-shrink-0"
                  style={{ width: `${100 / ImageItemsPhone.length}%` }}
                >
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    width="100%"
                    height="100%"
                    className="md:hidden rounded-xl max-h-96"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-50 hover:opacity-100"
            >
              <FcPrevious />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-50 hover:opacity-100"
            >
              <FcNext />
            </button>
          </div>
          <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
            {ImageItemsDesktop.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 w-2 rounded-full bg-gray-400 hover:bg-gray-600 focus:bg-gray-600 ${
                  index === currentIndex ? "bg-gray-600" : ""
                }`}
              ></button>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Slides;
