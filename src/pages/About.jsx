import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import styles from './About.module.css';
import AboutImg from '../assets/pic/homepic/giphy.gif'

import { useTranslation } from 'react-i18next';


const About = () => {
  const [showMoreMain, setShowMoreMain] = useState(false);
  const [showMoreMission, setShowMoreMission] = useState(false);
  const [showMoreGoal, setShowMoreGoal] = useState(false);
  const [showMoreTarget, setShowMoreTarget] = useState(false);

  const { t } = useTranslation();

  return (
    <>
      <PageHeader
        title={t('header.menu2')}
      />
      <div className={styles.aboutPage}>

        <section className={styles.content}>
          <motion.div
            className={styles.block}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2>{t("about.title")}</h2>
            <p>
              {t("about.p1")}
            </p>
            <AnimatePresence>
              {showMoreMain && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <p>
                    {t("about.p2")}
                  </p>
                  <p>{t("about.p3")}</p>
                  <p>
                    {t("about.p4")}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
            <button className={styles.readMoreButton} onClick={() => setShowMoreMain(prev => !prev)}>
              {showMoreMain ? t("about.buttonText5") : t("about.buttonText6")}
            </button>
          </motion.div>

          <motion.div
            className={styles.imageWrapper}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={AboutImg}
              alt="Caspion Team"
              className={styles.image}
            />
          </motion.div>

          <motion.div  className={styles.card} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <h3 id="mission">{t("about.subtitle1")}</h3>
            <p>
              {t("about.subtitle1p1")}
            </p>
            <AnimatePresence>
              {showMoreMission && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <p>
                    {t("about.subtitle1p2")}                  </p>
                </motion.div>
              )}
            </AnimatePresence>
            <button className={styles.readMoreButton} onClick={() => setShowMoreMission(prev => !prev)}>
              {showMoreMission ? t("about.buttonText5") : t("about.buttonText6")}
            </button>
          </motion.div>

          <motion.div className={styles.card} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <h3>{t("about.subtitle2")}</h3>
            <p>
              {t("about.subtitle2p1")}
            </p>
            <AnimatePresence>
              {showMoreGoal && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <p>
                    {t("about.subtitle2p2")}  </p>
                </motion.div>
              )}
            </AnimatePresence>
            <button className={styles.readMoreButton} onClick={() => setShowMoreGoal(prev => !prev)}>
              {showMoreGoal ? t("about.buttonText5") : t("about.buttonText6")}
            </button>
          </motion.div>

          <motion.div className={styles.card} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <h3>{t("about.subtitle3")}</h3>
            <p>
              {t("about.subtitle3p1")}
            </p>
            <AnimatePresence>
              {showMoreTarget && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <p>
                    {t("about.subtitle3p2")}      </p>
                </motion.div>
              )}
            </AnimatePresence>
            <button className={styles.readMoreButton} onClick={() => setShowMoreTarget(prev => !prev)}>
              {showMoreTarget ? t("about.buttonText5") : t("about.buttonText6")}
            </button>
          </motion.div>

          <motion.div className={styles.block2} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <p>
              {t('about.p5')}
            </p>
          </motion.div>
        </section>
      </div></>
  );
};

export default About;
