import React from 'react';
import styles from './contact.module.css';

const ContactForm = () => {
  return (
    <div className={styles.contactFormContainer}>
      <h2 className={styles.contactFormHeading}>Request a free consultation</h2>
      <form className={styles.contactForm}>
        <div className={styles.formGroup}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className={styles.formInput}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className={styles.formInput}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your Phone Number"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            className={styles.formInput}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            className={styles.formTextarea}
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
