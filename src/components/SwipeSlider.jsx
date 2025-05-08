import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// import SwiperImg1 from '../assets/pic/SwiperImg1.avif'
// import SwiperImg2 from '../assets/pic/SwiperImg2.jpeg'
// import SwiperImg3 from '../assets/pic/SwiperImg3.jpeg'
// import SwipeImg4 from '../assets/pic/SwipeImg4.jpg'



const ConstructionSlider = () => {

  const navigate = useNavigate();

  const slides = [
    {
      image: 'https://assteel.com.tr/wp-content/uploads/2023/03/pexels-nicole-rathmayr-220885-scaled.jpg',
      title: "Smart Procurement Solutions",
      subtitle: "Optimize your supply chain with data-driven purchasing and seamless vendor integration.",
      buttonText: "Learn More",
      path: '/about'
    },
    {
      image: 'https://images.unsplash.com/photo-1609867271967-a82f85c48531?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: "Reliable Global Sourcing",
      subtitle: "We connect you with trusted suppliers worldwide — quality, speed, and transparency guaranteed.",
      buttonText: "Our Projects",
      path: '/projects'

    },
    {
      image: 'https://images.unsplash.com/photo-1645651964715-d200ce0939cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: "End-to-End Procurement Services",
      subtitle: "From market analysis to delivery, we manage every step so you can focus on what matters most.",
      buttonText: "Contact Us",
      path: '/contact'

    }
  ];

  return (
    <div style={{ width: '100%', height: '87vh', position: 'relative', overflow: 'hidden' }}>
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

              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))'
              }} />

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
                    marginBottom: '1rem',
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
                    fontSize: 'clamp(0.8rem, 1.5vw, 1.2rem)',
                    marginBottom: '2rem'
                  }}
                >
                  {slide.subtitle}
                </motion.p>

                <motion.button
                  onClick={() => navigate(slide.path)}
                  whileHover={{ scale: 1.1, boxShadow: "0px 4px 15px rgba(255,255,255,0.4)" }}
                  style={{
                    display: 'inline-block',
                    padding: '12px 30px',
                    backgroundColor: '#003D93',
                    color: '#fff',
                    height: "55px",
                    borderRadius: '30px',
                    fontWeight: '400',
                    fontSize: 'clamp(1.1rem, 2vw, 1rem)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    border: 'none'
                  }}
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

export default ConstructionSlider;



