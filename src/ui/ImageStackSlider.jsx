import { useState } from 'react';

const images = [
  'https://res.cloudinary.com/dayojijed/image/upload/v1733482274/Projects-photos/qilz0cpzr5syxsdsfuwd.jpg',
  'https://res.cloudinary.com/dayojijed/image/upload/v1733482274/Projects-photos/fpahalhmm3e4yytewpze.jpg',
  'https://res.cloudinary.com/dayojijed/image/upload/v1733482274/Projects-photos/z4wqbqjofxe5qtghzmcc.jpg',
];

const desc = [
  'וילה פרטית, כפר תבור',
  'מלון גומא, כנרת',
  'בית מגורים פרטי, ארבל',
];

function ImageStackSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className=" w-full self-center" dir="rtl">
      <img
        key={currentIndex}
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className={`animate-fadeIn z-10 h-[541px] w-full justify-items-center object-cover shadow-lg shadow-black 2xl:h-[667px]`}
      />

      <div className="grid grid-cols-3 pt-4">
        <div className="text-right font-bold">{desc[currentIndex]}</div>

        <div className="flex justify-center gap-2">
          <button onClick={goToPrev}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#393E46"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-[270deg]"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <button onClick={goToNext}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#393E46"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-90"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
        <div className="flex justify-end text-left">
          {Array.from({ length: 3 }).map((_, index) => {
            return currentIndex === index ? (
              <span key={index}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="#f3f3f3"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                </svg>
              </span>
            ) : (
              <span key={index}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f3f3f3"
                  strokeWidth="2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                </svg>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ImageStackSlider;
