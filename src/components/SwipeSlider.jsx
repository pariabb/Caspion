import { Swiper, SwiperSlide } from 'swiper/react';
import './SwipeSlider.css';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const SwipeSlider = () => {
  const navigate = useNavigate();

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1688367622226-0d0d9e10e0d8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: "Smart Procurement Solutions",
      subtitle: "Optimize your supply chain with data-driven purchasing and seamless vendor integration.",
      buttonText: "Learn More",
      path: '/about'
    },
    {
      image: 'https://images.unsplash.com/photo-1529269421632-e9253d14d3a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: "Reliable Global Sourcing",
      subtitle: "We connect you with trusted suppliers worldwide — quality, speed, and transparency guaranteed.",
      buttonText: "Our Projects",
      path: '/projects'
    },
    {
      image: 'https://images.unsplash.com/photo-1618840626133-54463084a141?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: "End-to-End Procurement Services",
      subtitle: "From market analysis to delivery, we manage every step so you can focus on what matters most.",
      buttonText: "Contact Us",
      path: '/contact'
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
