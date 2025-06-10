import React from "react";
import styles from "./Footer.module.css";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import Logo from '../assets/pic/Caspion-logo.png';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const footerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const listItemHover = {
  whileHover: { x: 10, scale: 1.05 },
  transition: { type: "spring", stiffness: 100 },
};

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className={styles.footer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <Link to="/" className={styles.footerBrand}>
            <img className={styles.logoImage} src={Logo} alt="Caspion Logo" />
            <p className={styles.logoTextCustom}>
              <span>Caspion</span> <br /> Construction & Procurement
            </p>
          </Link>
        </div>

        <div className={styles.linksSection}>
          <div>
            <h4>{t("footer.company.title")}</h4>
            <ul>
              <motion.li {...listItemHover}><Link to="/about">{t("footer.company.about")}</Link></motion.li>
              <motion.li {...listItemHover}><Link to="/references">{t("footer.company.references")}</Link></motion.li>
              <motion.li {...listItemHover}><Link to="/partners">{t("footer.company.partners")}</Link></motion.li>
              <motion.li {...listItemHover}><Link to="/about">{t("footer.company.mission")}</Link></motion.li>
            </ul>
          </div>

          <div>
            <h4>{t("footer.services.title")}</h4>
            <ul>
              <motion.li {...listItemHover}><Link to="/clients">{t("footer.services.procurement")}</Link></motion.li>
              <motion.li {...listItemHover}><Link to="/clients">{t("footer.services.suppliers")}</Link></motion.li>
              <motion.li {...listItemHover}><Link to="/clients">{t("footer.services.enterprises")}</Link></motion.li>
              <motion.li {...listItemHover}><Link to="/clients">{t("footer.services.pricing")}</Link></motion.li>
            </ul>
          </div>

          <div>
            <h4>{t("footer.contact.title")}</h4>
            <ul>
              <motion.li {...listItemHover}><Link to="/contact">{t("footer.contact.help")}</Link></motion.li>
              <motion.li {...listItemHover}><Link to="/contact">{t("footer.contact.contactUs")}</Link></motion.li>
              <motion.li {...listItemHover}><Link to="/contact">{t("footer.contact.privacy")}</Link></motion.li>
            </ul>
          </div>
        </div>

        <div className={styles.subscribeSection}>
          <h4>{t("footer.subscribe.title")}</h4>
          <form>
            <input type="email" placeholder={t("footer.subscribe.placeholder")} />
            <button type="submit" className="mt-2">{t("footer.subscribe.button")}</button>
          </form>

          <div className={styles.socials}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>{t("footer.copyright", { year })}</p>
      </div>
    </motion.footer>
  );
};

export default Footer;