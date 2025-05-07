import React, { useState } from 'react';
import { FaClock, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'; // İkonları əlavə edirik
import PageHeader from '../components/PageHeader';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <PageHeader
        title="Contact Us"
        backgroundImage="https://images.unsplash.com/photo-1645651964715-d200ce0939cc?q=80&w=2070"
      />
      
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Bizimlə Əlaqə</h2>
        
        <div className={styles.contactInfo}>
          <div className={styles.infoItem}>
            <FaClock className={styles.icon} />
            <h4>İş Saatları</h4>
            <p>Mon - Fri: 09:00 - 18:00</p>
          </div>
          <div className={styles.infoItem}>
            <FaPhoneAlt className={styles.icon} />
            <h4>Əlaqə Nömrəsi</h4>
            <p>+994 12 345 67 89</p>
          </div>
          <div className={styles.infoItem}>
            <FaMapMarkerAlt className={styles.icon} />
            <h4>Ünvan</h4>
            <p>Bakı, Azərbaycan, Nizami küçəsi 10</p>
          </div>
          <div className={styles.infoItem}>
            <FaEnvelope className={styles.icon} />
            <h4>Email</h4>
            <p>info@company.com</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputWrapper}>
            <input 
              type="text" 
              name="name" 
              placeholder="Adınız"
              value={formData.name}
              onChange={handleChange} 
              className={styles.input} 
              required
            />
          </div>
          
          <div className={styles.inputWrapper}>
            <input 
              type="email" 
              name="email" 
              placeholder="E-poçt ünvanınız"
              value={formData.email}
              onChange={handleChange} 
              className={styles.input} 
              required
            />
          </div>

          <div className={styles.inputWrapper}>
            <textarea 
              name="message" 
              placeholder="Mesajınız"
              value={formData.message}
              onChange={handleChange} 
              className={styles.textarea} 
              required
            />
          </div>

          <button type="submit" className={styles.submitButton}>Göndər</button>
        </form>

        {/* Google Maps */}
        <div className={styles.mapWrapper}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.910270107654!2d49.86949387586625!3d40.38868127144411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d17b24f2a4f%3A0xe1b88294b8b93edb!2sBeauttech%20Bab%C9%99k%20Plaza!5e0!3m2!1str!2saz!4v1746559777519!5m2!1str!2saz"
            width="100%" 
            height="400" 
            style={{border: 0}} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
