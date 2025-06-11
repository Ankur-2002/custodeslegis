import React from 'react';
import styles from './officeInfo.module.css';
import ContactForm from '../Contact/ContactForm';

const OfficeInfo = () => {
  return (
    <div className={styles.container}>
      <div></div>
      <div></div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default OfficeInfo;
