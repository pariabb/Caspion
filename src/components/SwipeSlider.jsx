import { Swiper, SwiperSlide } from 'swiper/react';
import './SwipeSlider.css';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SwiperImg1 from '../assets/pic/homepic/swipeimg1.avif'
import SwiperImg2 from '../assets/pic/homepic/swipeimg2.avif'
import SwiperImg3 from '../assets/pic/homepic/swipeimg3.avif'
import { useTranslation } from 'react-i18next';



const SwipeSlider = () => {

  const { t } = useTranslation();

  const navigate = useNavigate();

  const slides = [
    {
      image: SwiperImg1,
      title: t("home.title1"),
      subtitle: t("home.subtitle1"),
      buttonText: t("home.buttonText1"),
      path: "/about",
    },
    {
      image: SwiperImg2,
      title: t("home.title2"),
      subtitle: t("home.subtitle2"),
      buttonText: t("home.buttonText2"),
      path: "/references",
    },
    {
      image: SwiperImg3,
      title: t("home.title3"),
      subtitle: t("home.subtitle3"),
      buttonText: t("home.buttonText3"),
      path: "/contact",
    }
  ];
  return (
    <div className="slider-wrapper">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={1}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-slide-container">
              <motion.img
                src={slide.image}
                alt={slide.title}
                initial={{ scale: 1 }}
                animate={{ scale: 1.05 }}
                transition={{ duration: 5, ease: "easeOut" }}
                className="swiper-img"
              />

              <div className="swiper-overlay" />

              <div className="swiper-text-content">
                <motion.h1
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  {slide.subtitle}
                </motion.p>

                <motion.button
                  onClick={() => navigate(slide.path)}
                  whileHover={{ scale: 1.1, boxShadow: "0px 4px 15px rgba(255,255,255,0.4)" }}
                  className="swiper-button"
                >
                  {slide.buttonText}
                </motion.button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwipeSlider;
