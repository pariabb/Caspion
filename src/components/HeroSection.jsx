import React from "react";
import { motion } from "framer-motion";
import styles from "./HeroSec.module.css";
import { Link } from "react-router-dom";
import HeroImg1 from "../assets/pic/homepic/heroimg1.avif";
import HeroImg2 from "../assets/pic/homepic/heroimg2.avif";
import HeroImg3 from "../assets/pic/homepic/heroimg3.avif";
import HeroImg4 from "../assets/pic/homepic/heroimg4.avif";
import { useTranslation } from "react-i18next";



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

  const { t } = useTranslation();

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
            {t('home.heroh1')}
          </motion.h1>

          <motion.p className={styles.heroDescription} variants={fadeUp}>
            {t('home.herop')}
          </motion.p>



          <motion.div className={styles.heroButtons} variants={fadeUp}>
            <Link to='/products'>
              <motion.button
                className={styles.primaryButton}
                whileHover={{ scale: 1.08 }}
              >
                {t('home.buttonText4')}
              </motion.button></Link>

            <Link to='/about'>
              <motion.button
                className={styles.secondaryButton}
                whileHover={{ scale: 1.08 }}
              >
                {t('home.buttonText1')}

              </motion.button>
            </Link>
          </motion.div>

        </motion.div>

        <div className={styles.multiImageGroup}>
          <motion.img
            src={HeroImg1}
            alt="Swipe 1"
            className={styles.floatingImage}
            variants={floatIn(-100, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
          />
          <motion.img
            src={HeroImg2}
            alt="Swipe 2"
            className={styles.floatingImage}
            variants={floatIn(100, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
          />
          <motion.img
            src={HeroImg3}
            alt="Swipe 3"
            className={styles.floatingImage}
            variants={floatIn(0, -100)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
          />
          <motion.img
            src={HeroImg4}
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
