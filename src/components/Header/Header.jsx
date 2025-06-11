'use client';
import React, { useEffect } from 'react';
import styles from './header.module.css'; // Assuming you have a CSS file for styling
import Link from 'next/link';
const Header = () => {
  const onScrollChangeHeaderColor = () => {
    const header = document.querySelector(`.${styles.layout}`);
    if (window.scrollY > 100) {
      header.classList.add(styles.scrolled);
    } else {
      header.classList.remove(styles.scrolled);
    }
  };

  useEffect(() => {
    // Add scroll event listener to change header color on scroll
    window.addEventListener('scroll', onScrollChangeHeaderColor);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', onScrollChangeHeaderColor);
    };
  }, []);
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img src="/logo.png" alt="Logo" className={styles.logo} />
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.headings}>
        <div className={styles.headingsContainer}>
          <span className={styles.heading1}>OUR RIGHTS, OUR PRIORITY.</span>
          <span className={styles.heading2}>
            Expert Legal Guidance In India.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
