import React, { useState } from 'react';
import { FaClock, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'; // İkonları əlavə edirik
import PageHeader from '../components/PageHeader';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [phoneError, setPhoneError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, ''); 
      if (value !== numericValue) {
        setPhoneError('Yalnız rəqəmlər daxil edin');
      } else {
        setPhoneError('');
      }

      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
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
            <p>+994 12 525 50 41 <br />+994 51 201 14 41</p>
          </div>
          <div className={styles.infoItem}>
            <FaMapMarkerAlt className={styles.icon} />
            <h4>Ünvan</h4>
            <p>Bakı, Xətai ray., Babək pr-i, Ələddin Quliyev 1131, Babək Plaza B7-02</p>
          </div>
          <div className={styles.infoItem}>
            <FaEnvelope className={styles.icon} />
            <h4>Email</h4>
            <p>info@ccp.az</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formRow}>
            <div className={styles.inputWrapperHalf}>
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

            <div className={styles.inputWrapperHalf}>
              <input
                type="text"
                name="surname"
                placeholder="Soyadınız"
                value={formData.surname}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.inputWrapperHalf}>
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

            <div className={styles.inputWrapperHalf}>
              <input
                type="tel"
                name="phone"
                placeholder="Telefon nömrəniz"
                value={formData.phone}
                onChange={handleChange}
                className={styles.input}
                inputMode="numeric"
              />
              {phoneError && <p className={styles.errorText}>{phoneError}</p>}
            </div>

          </div>

          <div className={styles.formRow}>
            <div className={styles.inputWrapperHalf}>
              <input
                type="text"
                name="company"
                placeholder="Şirkət (əgər varsa)"
                value={formData.company}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            <div className={styles.inputWrapperHalf}>
              <input
                type="text"
                name="subject"
                placeholder="Mövzu"
                value={formData.subject}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
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
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
