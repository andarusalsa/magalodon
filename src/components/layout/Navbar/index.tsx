import styles from "./Header.module.css";
import Image from 'next/image'
import logo from '../../elements/logo.jpeg'
import { useRouter } from 'next/router'; // Menggunakan useRouter dari next/router
import Link from 'next/link'

const Header = () => {
    const router = useRouter();
    const isMenuActive = (path: string) => router.pathname === path;

    return (
        <div>
            <header className={styles.header}>
                <div className={styles.logo}> 
                    <Image src={logo} alt="logo" className={styles.logo} />
                </div>
                <nav className={styles.navigation}>
                    <ul>
                        <li className={`li ${styles.li} ${isMenuActive('/beranda') ? styles.active : ''}`}>
                            <Link href='/beranda'>Beranda</Link>
                        </li>
                        <li className={`li ${styles.li} ${isMenuActive('/tentangkami') ? styles.active : ''}`}>
                            <Link href='/tentangkami'>Tentang Kami</Link>
                        </li>
                        <li className={`li ${styles.li} ${isMenuActive('/produk') ? styles.active : ''}`}>
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