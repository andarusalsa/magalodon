import React from 'react';
import styles from './footer.module.css';
import Link from 'next/link';
import {Facebook, Instagram, Youtube} from 'react-feather'


const Footer = () => {
  return (
      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <h2>Kunjungi Kami</h2>
          <div className={styles.imageContainer}>
            <Link href='#' className={styles.facebook}>
              <Facebook className={styles.image}/>
            </Link>
            <p>/</p>
            <Link href='#' className={styles.instagram}>
              <Instagram className={styles.image}/>
            </Link>
            <p>/</p>
            <Link href='#' className={styles.youtube}>
              <Youtube className={styles.image}/>
            </Link>
          </div>
          <p>© 2023 Magalodon</p>
        </div>
      </div>
  );
};

export default Footer;
