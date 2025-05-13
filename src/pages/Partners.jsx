import React from "react";
import PageHeader from "../components/PageHeader";
import styles from "./Partners.module.css";
import { Link } from "react-router-dom";

import { useTransition } from "react";

import partner1 from "../assets/pic/partners/Babcock_&_Wilcox_logo.png";
import partner2 from "../assets/pic/partners/bvb_logo.webp";
import partner3 from "../assets/pic/partners/CHINT_logo.png";
import partner4 from "../assets/pic/partners/DO-logo.png";
import partner5 from "../assets/pic/partners/emerson_logo.png";
import partner6 from "../assets/pic/partners/fajikura_logo.png";
import partner7 from "../assets/pic/partners/Fluke_Corporation_logo.png";
import partner8 from "../assets/pic/partners/hagel_logo.webp";
import partner9 from "../assets/pic/partners/int_technics_logo.jpeg";
import partner10 from "../assets/pic/partners/kamkabel_logo.svg";
import partner11 from "../assets/pic/partners/lentamet_logo.jpg";
import partner12 from "../assets/pic/partners/Mettler_Toledo_logo.png";
import partner13 from "../assets/pic/partners/milcopci.avif";
import partner14 from "../assets/pic/partners/monitran_logo.webp";
import partner15 from "../assets/pic/partners/npp-molot_logo.jpg";
import partner16 from "../assets/pic/partners/precision_logo.png";
import partner17 from "../assets/pic/partners/purge_logo.png";
import partner18 from "../assets/pic/partners/qingdao_logo.png";
import partner19 from "../assets/pic/partners/Reagecon_Primary_Logo.png";
import partner20 from "../assets/pic/partners/ribinski_logo.png";
import partner21 from "../assets/pic/partners/SGS_Logo.png";
import partner22 from "../assets/pic/partners/shangai_logo.jpg";
import partner23 from "../assets/pic/partners/Site-Logo-Fibconet.png";
import partner24 from "../assets/pic/partners/SPIG-GMAB_logo.png";
import partner25 from "../assets/pic/partners/tasa_logo.png";
import partner26 from "../assets/pic/partners/tekodak_logo.webp";
import partner27 from "../assets/pic/partners/texelektro_logo.svg";
import partner28 from "../assets/pic/partners/tomskabel_logo.jpg";
import partner29 from "../assets/pic/partners/uzar_logo.jpg";
import partner30 from "../assets/pic/partners/vindustries_logo.png";
import partner31 from "../assets/pic/partners/Yokogawa_Logo.webp";
import partner32 from "../assets/pic/partners/kabelni_alyans_logo.png";
import partner33 from "../assets/pic/partners/iport_logo.png";
import { useTranslation } from "react-i18next";

const partners = [
  partner1, partner2, partner3, partner4, partner5, partner6, partner7,
  partner8, partner9, partner10, partner11, partner12, partner13,
  partner14, partner15, partner16, partner17, partner18, partner19,
  partner20, partner21, partner22, partner23, partner24, partner25,
  partner26, partner27, partner28, partner29, partner30, partner31, partner32, partner33
];

const Partners = () => {

  const { t } = useTranslation();

  return (
    <div>
      <PageHeader
        title={t('header.menu5')}

      />
      <div className={styles.container}>
        <h2 className={styles.heading}>{t('partners.title')}</h2>
        <p className={styles.description}>
          {t('partners.subtitle')}
        </p>
        <div className={styles.grid}>
          {partners.map((logo, idx) => (
            <div key={idx} className={styles.card}>
              <img
                src={logo}
                alt={`Partner ${idx + 1}`}
                className={`${styles.logo} 
                  ${idx === 8 ? styles.partner9 : ""} 
                  ${idx === 12 ? styles.partner13 : ""}`}
              />
            </div>
          ))}
        </div>
        <div className={styles.cta}>
          <h3>{t('partners.question')}</h3>
          <p>{t('partners.p')}</p>
          <Link to="/contact" className={styles.ctaButton}>
            {t('home.buttonText3')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Partners;
