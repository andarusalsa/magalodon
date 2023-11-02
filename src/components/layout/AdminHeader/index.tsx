import styles from "./AH.module.css";
import Image from 'next/image'
import logo from '@/components/elements/logo.jpeg'
import { useRouter } from 'next/router'; // Menggunakan useRouter dari next/router
import Link from 'next/link'
import { User } from "react-feather";

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
                        <li className={`li ${styles.li} ${isMenuActive('/Admin/Profil') ? styles.active : ''}`}>
                            <Link href='/Admin/Profil'>Admin</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;