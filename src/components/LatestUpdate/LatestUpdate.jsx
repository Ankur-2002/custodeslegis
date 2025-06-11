import React from 'react';
import styles from './latestupdate.module.css';
import Card from '../Card/Card';
import OfficeInfo from '../OfficeInfo/OfficeInfo';

const LatestUpdate = () => {
  return (
    <div className={styles.latestUpdateContainer}>
      <div className={styles.latestUpdateHeading}>
        <span>Custodeslegis LAWYERS FAMILY</span>
      </div>

      <div className={styles.latestUpdateHeading2}>OUR SERVICES</div>
      <div className={styles.latestUpdateContent}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default LatestUpdate;
