import React, { useState } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';

function ImageSlider({ images, desc }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dayojijed',
    },
  });

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Images Wrapper */}
      <div
        className="flex h-full w-full transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => {
          const cloudinaryImg = cld
            .image(img)
            .resize(auto().gravity(autoGravity()))
            .format('auto')
            .quality('auto');

          return (
            <div key={index} className="relative h-full w-full flex-shrink-0">
              {/* Dark Overlay */}
              <div className="absolute inset-0 z-10 bg-black/10"></div>
              {/* Blur Effect */}
              <AdvancedImage
                cldImg={cloudinaryImg}
                className="h-full w-full object-cover sm:object-fill"
              />
            </div>
          );
        })}
      </div>

      {/* Bottom Bar: Text and Navigation */}
      <div className="absolute bottom-40 left-4 right-4 z-20 flex flex-wrap items-center justify-center sm:bottom-12 sm:left-10 sm:right-44 sm:justify-between">
        {/* Text */}
        <div className="flex cursor-pointer flex-wrap items-center justify-center gap-1 text-stone-100 drop-shadow-lg sm:ml-24 sm:flex-col sm:items-end sm:text-lg">
          <h3
            className="mb-2 text-3xl font-extrabold sm:mb-4 md:text-4xl"
            key={`title-${currentIndex}`}
          >
            {desc.titles[currentIndex]}
          </h3>
          <p className="text-xl hover:text-yellow-500">
            {desc.details[currentIndex]}
          </p>
        </div>

        {/* Navigation Buttons and Index */}
        <div className="mt-2 flex items-center gap-2 text-stone-600 sm:gap-4">
          <button
            onClick={goToPrev}
            className="flex items-center justify-center transition-transform duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 24"
              width="100"
              height="24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-yellow-500 transition-all duration-300 hover:-translate-x-2"
            >
              <line x1="98" y1="12" x2="2" y2="12" />
              <polyline points="8 8, 2 12, 8 16" />
            </svg>
          </button>

          <span className="text-lg text-stone-100 sm:text-xl">
            0{currentIndex + 1} / 0{images.length}
          </span>

          <button
            onClick={goToNext}
            className="flex items-center justify-center "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 24"
              width="100"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-yellow-500 transition-transform duration-300 hover:translate-x-2"
            >
              <line x1="2" y1="12" x2="98" y2="12" />
              <polyline points="92 8, 98 12, 92 16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
