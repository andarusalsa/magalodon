import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './AS.module.css'; 

const AdminSidebar = () => {
    const router = useRouter();
    const [isPembelianOpen, setIsPembelianOpen] = useState(false);

    const isMenuActive = (path: string) => router.pathname === path;

    return (
        <div className="admin-sidebar">
            <ul className="ul">
                <li className={`li ${styles.li} ${isMenuActive('/Admin/Dashboard') ? styles.active : ''}`}>
                    <Link className={styles.link} href="/Admin/Dashboard">Dashboard</Link>
                </li>
                <li className={`li ${styles.li} ${(isPembelianOpen) ? styles.active : ''}`}
                    onClick={() => setIsPembelianOpen(!isPembelianOpen)}>
                    <div 
                        onClick={() => setIsPembelianOpen(!isPembelianOpen)}
                        className={`${styles.menuItem} ${isMenuActive('/Admin/PembelianMaggot') || isMenuActive('/Admin/PembelianLimbah') ? styles.active : ''}`}
                    >
                        Pembelian
                    </div>
                    {isPembelianOpen && (
                        <ul className={styles.dropdown}>
                            <li className={styles.dropdownItem}><Link href="/Admin/PembelianMaggot">Maggot</Link></li>
                            <li className={styles.dropdownItem}><Link href="/Admin/PembelianLimbah">Limbah</Link></li>
                        </ul>
                    )}
                </li>
                <li className={`li ${styles.li} ${isMenuActive('/Admin/Kerjasama') ? styles.active : ''}`}>
                    <Link href="/Admin/Kerjasama">Data Kerjasama</Link>
                </li>
                <li className={`li ${styles.li} ${isMenuActive('/Admin/Penjualan') ? styles.active : ''}`}>
                    <Link href="/admin/download-sales">Komunitas</Link>
                </li>
                <li className={`li ${styles.li} ${isMenuActive('/Admin/Penjualan') ? styles.active : ''}`}>
                    <Link href="/admin/download-sales">Profil</Link>
                </li>
                <li className={`li ${styles.li} ${isMenuActive('/Admin/Penjualan') ? styles.active : ''}`}>
                    <Link href="/admin/download-sales">Keluar</Link>
                </li>
            </ul>
        </div>
    );
};

export default AdminSidebar;
