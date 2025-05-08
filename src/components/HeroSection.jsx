import React from "react";
import { motion } from "framer-motion";
import styles from "./HeroSec.module.css";
import { Link } from "react-router-dom";
// import SwipeImg1 from "../assets/pic/swiper/SwipeImg1.jpg";
// import SwipeImg2 from "../assets/pic/swiper/SwipeImg2.jpeg";
// import SwipeImg3 from "../assets/pic/swiper/SwipeImg3.jpeg";
// import SwipeImg4 from "../assets/pic/swiper/SwipeImg4.jpg";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const floatIn = (x = 0, y = 0) => ({
  hidden: { opacity: 0, x, y },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
});



const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <motion.div
          className={styles.heroContent}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          <motion.h1 className={styles.heroTitle} variants={fadeUp}>
            Empower Your Business with Smart Procurement
          </motion.h1>

          <motion.p className={styles.heroDescription} variants={fadeUp}>
            Transform the way you manage procurement and supply chain with our
            intelligent and automated solutions.
          </motion.p>


          <motion.div className={styles.heroButtons} variants={fadeUp}>
            <Link to='/projects'>
              <motion.button
                className={styles.primaryButton}
                whileHover={{ scale: 1.08 }}
              >
                Get Started
              </motion.button></Link>

            <Link to='/about'>
              <motion.button
                className={styles.secondaryButton}
                whileHover={{ scale: 1.08 }}
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>

        </motion.div>

        <div className={styles.multiImageGroup}>
          <motion.img
            src='https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt="Swipe 1"
            className={styles.floatingImage}
            variants={floatIn(-100, 0)} // from left
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
          />
          <motion.img
            src='https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt="Swipe 2"
            className={styles.floatingImage}
            variants={floatIn(100, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
          />
          <motion.img
            src='https://images.unsplash.com/photo-1532562145520-b8cce2486cd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGNvbnN0cnVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D'
            alt="Swipe 3"
            className={styles.floatingImage}
            variants={floatIn(0, -100)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
          />
          <motion.img
            src='https://images.unsplash.com/photo-1489514354504-1653aa90e34e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt="Swipe 4"
            className={styles.floatingImage}
            variants={floatIn(0, 100)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
