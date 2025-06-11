import React from 'react';
import styles from './card.module.css';
const Card = ({ image, title, description }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContentContainer}>
        <div className={styles.cardImageContainer}>
          <img
            src={
              'https://goldenblatt.bold-themes.com/main-demo/wp-content/uploads/sites/2/2019/10/inner_card_13.jpg'
            }
            alt={title}
            className={styles.cardImage}
          />
        </div>
        <div className={styles.cardTextContainer}>
          <h3 className={styles.cardTitle}>Dispute and Settlements</h3>
          <p className={styles.cardDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
