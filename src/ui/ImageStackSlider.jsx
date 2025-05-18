import { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import { useLanguage } from '../context/LanguageContext'
import 'swiper/css'
import 'swiper/css/effect-fade'

/* Keep [images] hardcoded : Simple, fast, zero fetch needed */
const images = [
  {
    url: 'https://res.cloudinary.com/dayojijed/image/upload/v1733482274/Projects-photos/qilz0cpzr5syxsdsfuwd.jpg',
    desc: {
      he: 'וילה פרטית, כפר תבור',
      en: 'Private villa, Kfar Tavor',
    },
    position: 'image1',
  },
  {
    url: 'https://res.cloudinary.com/dayojijed/image/upload/v1733482274/Projects-photos/fpahalhmm3e4yytewpze.jpg',
    desc: {
      he: 'מלון גומא, כנרת',
      en: 'Goma Hotel, Kinneret',
    },
    position: 'image2',
  },
  {
    url: 'https://res.cloudinary.com/dayojijed/image/upload/v1733482274/Projects-photos/z4wqbqjofxe5qtghzmcc.jpg',
    desc: {
      he: 'בית מגורים פרטי, ארבל',
      en: 'Private residence, Arbel',
    },
    position: 'image3',
  },
]

function ImageStackSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const swiperRef = useRef(null)
  const { lang } = useLanguage()
  const objectPositionClass = {
    image1: 'object-[60%_center]',
    image2: 'object-[30%_center]',
    image3: 'object-[76%_center]',
  }

  useEffect(() => {
    const isMobile = window.innerWidth < 640
    if (isMobile && swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.start()
    }
  }, [])

  const goToPrev = () => swiperRef.current?.slidePrev()
  const goToNext = () => swiperRef.current?.slideNext()

  return (
    <div className="w-full self-center" dir="rtl">
      {/* Image */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200}
        slidesPerView={1}
        loop={true}
        autoplay={false}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        className="w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.url}
              alt={`Slide ${index}`}
              loading="lazy"
              className={`z-10 h-[541px] w-full object-cover shadow-lg shadow-black sm:object-center 2xl:h-[667px] ${
                objectPositionClass[image.position]
              }`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Image toolbar */}
      <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-3">
        {/* Image Description */}
        <div className="text-center font-bold sm:text-right">
          {images[currentIndex].desc[lang]}
        </div>

        {/* Pagination - Arrows(prev,next) */}
        <div className="hidden justify-center gap-2 sm:flex">
          <button onClick={goToPrev}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#393E46"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="rotate-90"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>

        {/* Pagination - Image number indicator */}
        <div className="flex justify-center sm:justify-end sm:text-left">
          {images.map((_, index) => (
            <span key={index}>
              {index === currentIndex ? (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="#f3f3f3"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                </svg>
              ) : (
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
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageStackSlider
