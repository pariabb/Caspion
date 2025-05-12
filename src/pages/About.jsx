import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import styles from './About.module.css';
import AboutImg from '../assets/pic/about_img.avif'

const About = () => {
  const [showMoreMain, setShowMoreMain] = useState(false);
  const [showMoreMission, setShowMoreMission] = useState(false);
  const [showMoreGoal, setShowMoreGoal] = useState(false);
  const [showMoreTarget, setShowMoreTarget] = useState(false);

  return (
    <>
      <PageHeader
        title="Haqqımızda"
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
                    Şirkətimiz fiber-optik məhsullar, GPON avadanlıqları və aksessuarları, telekommunikasiya avadanlıqları və məhsulları, fiber-optik və sualtı rabitə kabelləri, elektrik kabelləri və onlara aid aksessuarların satışı ilə məşğuldur. Bundan əlavə, metal və polietilen borular, xamutlar və əlaqədar məhsullar, qoşqu və yarımqoşqular, nəzarət-ölçü cihazları və avadanlıqları, ehtiyat hissələri, kimyəvi maddələr və məhlullar da məhsul çeşidimizə daxildir. Eyni zamanda, rulmanlar (bearings), klapanlar və idarəetmə sistemləri, nasoslar və kompressorlar, metal kabel kanalları, kronşteynlər və onların hissələri kimi sənaye və enerji sektoruna aid avadanlıqların satışını da həyata keçiririk.
                  </p>
                  <p>İlk olaraq qeyd etmək lazımdır ki, şirkətimiz yuxarıda qeyd edilən və daha çox məhsulların korporativ formada təmin edilməsi istiqamətində zəngin təcrübəyə malikdir və bu bizə müştərilərimizin bazar iqtisadiyyatındakı mövqeyini gücləndirməyə və rəqabət üstünlüyünü təmin etməyə imkan verir. İşimizə, partnyorlarımıza və müştərilərimizə göstərdiyimiz diqqət, xüsusi yanaşma bizi öz sahəmizdə uğurlu edən və fərqləndirən faktorlardandır.

                    Hər kəsə məlumdur ki, daim inkişaf etməkdə olan dünya və yerli satış bazarı yeni yanaşma və həll yolları tələb edir. Şirkətimiz məhz bu tələblər rəhbər tutularaq və satış sahəsində uzunillik təcrübəmizə əsaslanaraq müştərilərinə xidməti davam etdirir.

                    "Caspion Construction and Procurement MMC” satışını həyata keçirdiyi geniş çeşiddə avadanlıq və məhsullar öz keyfiyyəti və işləkliyi baxımından əməkdaşlıq etdiyimiz müəssisələrin istək və tələblərinə yüksək səviyyədə cavab verir. Bununla yanaşı, şirkətimizin təklif etdiyi məhsullar birbaşa istehsalçıdan tədarük olunaraq xüsusi texniki yoxlamalardan sonra şirkətlərə biz tərəfdən çatdırılma yolu ilə təhvil verilir. Buna görə də, hər zaman satışını həyata keçirdiyimiz məhsulların keyfiyyətinə tam zəmanət veririk.</p>
                  <p>
                    Şirkətimizin müştərilərlə münasibətlərdə əsas prinsipləri fərdi yanaşma, ətraflı araşdırma və hər bir layihədə maksimum dərəcədə uğur qazanmaqdan ibarətdir. Görülən işə ciddi və məsuliyyətli yanaşmamız sektorda şirkətimizə yüksək səviyyədə rəğbət qazandırmışdır.

                    "Caspion Construction and Procurement MMC” şirkətimizin yüksək təcrübə və peşəkarlığı sayəsində qazandığı tərəfdaşları ilə saytımızın “Partnyorlar” bölməsindən tanış ola bilərsiniz.
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
              src={AboutImg}
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
                    Biz sahib olduğumuz geniş imkanlar sayəsində müştərilərimizin ən etibarlı, ən rahat xidmətlər təklif edən əsas tərəfdaşına çevrilmək niyyətindəyik. Eyni zamanda, ümumilikdə ölkəmizdə satış prosesinin optimallaşdırılması və bu sahədə yeni imkanların yaradılması istiqamətində öz səylərimizi də davam etdirmək əsas missiyalarımızdan biridir. Bununla yanaşı, daim dəyişməkdə və inkişaf etməkdə olan satış bazarında yeniliklərə imza ataraq fəalliyyətimizin əhatə dairəsini daha da genişləndirmək əzmindəyik.                  </p>
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
                    Şirkətimizin məqsədi müştərilərimizin alıcılıq qabiliyyətinə hörmətlə yanaşaraq, süni qiymət artımına getmədən onları ən optimal satış qiymətləri, sərfəli xidmətlər və eyni zamanda ən keyfiyyətli məhsullarla təmin etməkdir.                  </p>
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
                    Şirkət olaraq hədəfimiz alıcıları ən optimal, orijinal və keyfiyyətli məhsullarla, eləcə də sürətli çatdırılma xidmətləri ilə təmin etməkdir. Bununla yanaşı, alıcıların məhsulları ən sərfəli şərtlərlə əldə etməsinə nail olmaq, onları minimal qiymətlərlə maksimum keyfiyyət və geniş çeşidlə təmin etmək də əsas hədəflərimizdən biridir.

                    Caspion Construction and Procurement şirkəti olaraq sizin bütün istək və tələblərinizi yerinə yetirməyə hazırıq. Bizimlə əlaqə saxlayın və bizim təcrübəli komandamız sizə doğru həllər tapmaqda köməklik göstərsin!                  </p>
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
