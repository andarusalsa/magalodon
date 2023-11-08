import styles from "./Header.module.css";
import Image from 'next/image'
import logo from '../../elements/logo.jpeg'
import { useRouter } from 'next/router'; 
import Link from 'next/link'
import { List } from "@phosphor-icons/react";
import { useState } from 'react'

const Header = () => {
    const router = useRouter();
    const isMenuActive = (path: string) => router.pathname === path;
    const isProductPage = isMenuActive('/produk') || router.pathname.includes('/BPMaggot') || router.pathname.includes('/BPLimbah');
    const [menuListVisible, setMenuListVisible] = useState(false)

    const toggleMenuList = () => {
        setMenuListVisible(!menuListVisible); 
    }

    return (
        <div>
            <header className={styles.header}>
                <div className={styles.Up}>
                    <div className={styles.logo}> 
                        <Image src={logo} alt="logo" className={styles.logo} />
                    </div>
                    <div className={styles.listIcon} onClick={toggleMenuList}>
                        <List/>
                    </div>
                    {menuListVisible && (
                        <div className={styles.moreOptions}>
                            <nav className={styles.navigationOp}>
                                <ul className={`${styles.hidden} ${menuListVisible ? '' : styles.hidden}`}>
                                    <li className={`li ${styles.li} ${isMenuActive('/beranda') ? styles.active : ''}`}>
                                        <Link href='/beranda'>Beranda</Link>
                                    </li>
                                    <li className={`li ${styles.li} ${isMenuActive('/tentangkami') ? styles.active : ''}`}>
                                        <Link href='/tentangkami'>Tentang Kami</Link>
                                    </li>
                                    <li className={`li ${styles.li} ${isProductPage ? styles.active : ''}`}>
                                        <Link href='/produk'>Produk</Link>
                                    </li>
                                    <li className={`li ${styles.li} ${isMenuActive('/kontak') ? styles.active : ''}`}>
                                        <Link href='/kontak'>
                                            Kontak
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        )}
                </div>
                <nav className={styles.navigation}>
                    <ul className={`${styles.hidden} ${menuListVisible ? '' : styles.hidden}`}>
                        <li className={`li ${styles.li} ${isMenuActive('/beranda') ? styles.active : ''}`}>
                            <Link href='/beranda'>Beranda</Link>
                        </li>
                        <li className={`li ${styles.li} ${isMenuActive('/tentangkami') ? styles.active : ''}`}>
                            <Link href='/tentangkami'>Tentang Kami</Link>
                        </li>
                        <li className={`li ${styles.li} ${isProductPage ? styles.active : ''}`}>
                            <Link href='/produk'>Produk</Link>
                        </li>
                        <li className={`li ${styles.li} ${isMenuActive('/kontak') ? styles.active : ''}`}>
                            <Link href='/kontak'>
                                Kontak
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;
