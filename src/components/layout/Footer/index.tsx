import React from 'react';
import styles from './footer.module.css';
import Link from 'next/link';
import Image from 'next/image'
import ig from '../../elements/ig.png';
import fb from '../../elements/fb.png';
import yt from '../../elements/yt.png';

const Footer = () => {
  return (
    <div>
      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.imageContainer}>
            <Image src={ig} alt="ig" className={styles.image} />
            <Image src={fb} alt="fb" className={styles.image} />
            <Image src={yt} alt="yt" className={styles.image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
