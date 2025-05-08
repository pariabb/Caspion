import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import styles from './About.module.css';

const About = () => {
  const [showMoreMain, setShowMoreMain] = useState(false);
  const [showMoreMission, setShowMoreMission] = useState(false);
  const [showMoreGoal, setShowMoreGoal] = useState(false);
  const [showMoreTarget, setShowMoreTarget] = useState(false);

  return (
     <>
      <PageHeader
        title="Haqqımızda"
        backgroundImage="https://images.unsplash.com/photo-1645651964715-d200ce0939cc?q=80&w=2070&auto=format&fit=crop"
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
          <h2>"Caspion Construction and Procurement MMC"</h2>
          <p>
            “Caspion Construction and Procurement MMC” şirkəti 2021-ci ildən bəri Azərbaycanın satış bazarında
            ən öndə gedən aparıcı şirkətlərdən biridir. Bu aparıcı rolu üzərimizə götürərək ölkəmizdə bu sahədə
            yeniliklərə hər zaman cığır açmağı hədəfləyirik.
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
                  Şirkətimiz müxtəlif növ inşaat materialları, rabitə və telekommunikasiya avadanlıqları, neft-qaz
                  avadanlıqları və ehtiyat hissələri, sənaye avadanlıqları və onların ehtiyat hissələri, təhlükəsizlik
                  sistemləri, əl alətləri və daha çox məhsulların satışını həyata keçirir.
                </p>
                <p>
                  Korporativ müştərilərlə zəngin təcrübəmiz bazar iqtisadiyyatında onların mövqeyini gücləndirməyə
                  yardım edir. Keyfiyyətli və texniki yoxlanmış məhsullar təklif olunur.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          <button className={styles.readMoreButton} onClick={() => setShowMoreMain(prev => !prev)}>
            {showMoreMain ? 'Gizlət' : 'Davamını oxu'}
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
            src="https://images.unsplash.com/photo-1728435195819-3083655add92?q=80&w=2100&auto=format&fit=crop"
            alt="Caspion Team"
            className={styles.image}
          />
        </motion.div>

        <motion.div className={styles.card} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
          <h3>Missiyamız</h3>
          <p>
            Müştərilərimizin ən etibarlı, rahat xidmət təklif edən əsas tərəfdaşına çevrilmək...
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
                  Satış prosesinin optimallaşdırılması və yeni imkanların yaradılması da əsas missiyamızdır. Daim inkişaf edən bazarda yenilikçi yanaşma ilə daha geniş fəaliyyət sahəsi qurmaq niyyətindəyik.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          <button className={styles.readMoreButton} onClick={() => setShowMoreMission(prev => !prev)}>
            {showMoreMission ? 'Gizlət' : 'Davamını oxu'}
          </button>
        </motion.div>

        <motion.div className={styles.card} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
          <h3>Məqsədimiz</h3>
          <p>
            Süni qiymət artımına getmədən müştəriləri keyfiyyətli məhsullarla təmin etmək...
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
                  Ən optimal qiymətlərlə yüksək səviyyəli xidmətlər göstərmək, eyni zamanda müştərilərin alıcılıq gücünü nəzərə almaq əsas məqsədlərimizdəndir.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          <button className={styles.readMoreButton} onClick={() => setShowMoreGoal(prev => !prev)}>
            {showMoreGoal ? 'Gizlət' : 'Davamını oxu'}
          </button>
        </motion.div>

        <motion.div className={styles.card} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
          <h3>Hədəfimiz</h3>
          <p>
            Alıcılara sürətli çatdırılma və keyfiyyətli məhsullar təqdim etmək...
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
                  Məhsulları minimal qiymətlərlə təqdim edərək maksimum keyfiyyət və geniş çeşidə nail olmaq əsas hədəfimizdir.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          <button className={styles.readMoreButton} onClick={() => setShowMoreTarget(prev => !prev)}>
            {showMoreTarget ? 'Gizlət' : 'Davamını oxu'}
          </button>
        </motion.div>

        <motion.div className={styles.block2} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
          <p>
            Caspion olaraq sizin bütün istək və tələblərinizi yerinə yetirməyə hazırıq. Bizimlə əlaqə saxlayın, sizə uyğun ən doğru həlləri birlikdə taparaq uğur qazandığınız layihələrə imza ataq.
          </p>
        </motion.div>
      </section>
    </div></>
  );
};

export default About;
