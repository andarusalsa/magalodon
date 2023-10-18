import { useState, useEffect } from 'react';
import styles from "./Header.module.css";
import Image from 'next/image'
import logo from '../../elements/logo.jpeg'
import { useRouter } from 'next/router'; // Menggunakan useRouter dari next/router
import Link from 'next/link'

type HeaderProps = {
    activePath: string;
};

const Header: React.FC<HeaderProps> = ({ activePath }) => {
    const location = useRouter();
    const [currentPath, setCurrentPath] = useState(activePath);

    useEffect(() => {
        setCurrentPath(activePath);
    }, [activePath]);

    return (
        <div>
            <header className={styles.header}>
                <div className={styles.logo}> 
                    <Image src={logo} alt="logo" className={styles.logo} />
                </div>
                <nav className={styles.navigation}>
                    <ul>
                        <li>
                            <Link href='/beranda' className={currentPath === '/beranda' ? styles.activeLink : ''}>
                                Beranda
                            </Link>
                        </li>
                        <li>
                            <Link href='/tentangkami' className={currentPath === '/tentangkami' ? styles.activeLink : ''}>
                                Tentang Kami
                            </Link>
                        </li>
                        <li>
                            <Link href='/produk' className={currentPath === '/produk' ? styles.activeLink : ''}>
                                Produk
                            </Link>
                        </li>
                        <li>
                            <Link href='/kontak' className={currentPath === '/kontak' ? styles.activeLink : ''}>
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