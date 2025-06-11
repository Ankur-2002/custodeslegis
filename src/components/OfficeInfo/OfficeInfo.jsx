import React from 'react';
import styles from './officeInfo.module.css';
import ContactForm from '../Contact/ContactForm';

const OfficeTile = ({ icon, title, desc }) => {
  return (
    <div className={styles.tile}>
      <div className={styles.tileIcon}>
        <img src={icon} alt="Office Icon" />
      </div>
      <div className={styles.tileText}>
        <span className={styles.tileHeading}>{title}</span>
        <span className={styles.tileDesc}>
          {desc?.map?.((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < desc.length - 1 && <br />}
            </React.Fragment>
          )) || desc}
        </span>
      </div>
    </div>
  );
};
const OfficeInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <span>Visit At Custodeslegis</span>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.officeInfoContainer}>
          <div className={styles.officeInfoContent}>
            <OfficeTile
              icon="/office.svg"
              title="Main Office"
              desc="49 Russell Square, London, UK"
            />
            <OfficeTile
              icon="/call.svg"
              title="Call Us"
              desc={['+44 20 7946 0958', '+44 20 7946 0959']}
            />
            <OfficeTile
              icon="/mail.svg"
              title="Email Us"
              desc={['info@goldenblatt.co.uk', 'office@goldenblatt.co.uk']}
            />
            <OfficeTile
              icon="/alarm.svg"
              title="Working Hours"
              desc={[
                'Monday - Friday: 9:00 AM - 6:00 PM',
                'Saturday: 10:00 AM - 4:00 PM',
                'Sunday: Closed',
              ]}
            />
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default OfficeInfo;
