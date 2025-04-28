import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import SwiperImg1 from '../assets/pic/SwiperImg1.avif'
import SwiperImg2 from '../assets/pic/SwiperImg2.jpeg'
import SwiperImg3 from '../assets/pic/SwiperImg3.jpeg'


const ConstructionSlider = () => {
  const slides = [
    {
      image: SwiperImg1,
      title: "Building the Future",
      subtitle: "Modern Construction Solutions",
      buttonText: "Learn More"
    },
    {
      image: SwiperImg2,
      title: "Reliable Construction",
      subtitle: "Strong Foundations, Strong Future",
      buttonText: "Our Projects"
    },
    {
      image: SwiperImg3,
      title: "Innovative Design",
      subtitle: "Crafting Excellence",
      buttonText: "Contact Us"
    }
  ];

  return (
    <div style={{ width: '100%', height: '80vh', position: 'relative', overflow: 'hidden' }}>
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        slidesPerView={1}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div style={{ width: '100%', height: '90vh', position: 'relative', overflow: 'hidden' }}>
              {/* Background Image with Zoom */}
              <motion.img
                src={slide.image}
                alt={slide.title}
                initial={{ scale: 1 }}
                animate={{ scale: 1.05 }}
                transition={{ duration: 5, ease: "easeOut" }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.5)'
                }}
              />

              {/* Dark Gradient Overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))'
              }} />

              {/* Animated Text and Button */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                color: 'white',
                zIndex: 10,
                padding: '0 20px',
                width: '100%',
                maxWidth: '1000px'
              }}>
                <motion.h1
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  style={{
                    fontSize: 'clamp(2rem, 5vw, 4rem)',
                    marginBottom: '0.5rem',
                    lineHeight: '1.2'
                  }}
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.8rem)',
                    marginBottom: '1.5rem'
                  }}
                >
                  {slide.subtitle}
                </motion.p>

                {/* Animated Button */}
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, boxShadow: "0px 4px 15px rgba(255,255,255,0.4)" }}
                  style={{
                    display: 'inline-block',
                    padding: '12px 30px',
                    backgroundColor: '#ffffff',
                    color: '#000',
                    borderRadius: '30px',
                    fontWeight: '600',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                >
                  {slide.buttonText}
                </motion.a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ConstructionSlider;



