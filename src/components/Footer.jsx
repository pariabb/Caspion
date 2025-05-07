import React from "react";
import styles from "./Footer.module.css";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import Logo from '../assets/pic/Caspion-logo.png';

const footerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const listItemHover = {
  whileHover: { x: 10, scale: 1.05 },
  transition: { type: "spring", stiffness: 100 },
};

const Footer = () => {
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
          <img className="logo mb-4" src={Logo} alt="Logo" style={{ height: '70px' }} />
          {/* <p className={styles.description}>
            Smart procurement solutions for modern businesses.
          </p> */}
        </div>

        <div className={styles.linksSection}>
          <div>
            <h4>Company</h4>
            <ul>
              {['About', 'Careers', 'Blog'].map((item, idx) => (
                <motion.li key={idx} {...listItemHover}>{item}</motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Solutions</h4>
            <ul>
              {['For Suppliers', 'For Enterprises', 'Pricing'].map((item, idx) => (
                <motion.li key={idx} {...listItemHover}>{item}</motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              {['Help Center', 'Contact Us', 'Privacy Policy'].map((item, idx) => (
                <motion.li key={idx} {...listItemHover}>{item}</motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.subscribeSection}>
          <h4>Subscribe to updates</h4>
          <form>
            <input type="email" placeholder="Your email" />
            <button type="submit">Subscribe</button>
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
        <p>© {new Date().getFullYear()} Caspion. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
