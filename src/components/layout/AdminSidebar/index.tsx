import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './AS.module.css'
import Modal from 'react-modal'

const AdminSidebar = () => {
    const [openModal, setOpenModal] = useState(false)
    const router = useRouter();
    const [isPembelianOpen, setIsPembelianOpen] = useState(false)

    const isMenuActive = (path: string) => router.pathname === path
    const handleModal = () =>{
        setOpenModal(true);
    }

    const handleLogout = () => {
        router.push('/Admin')
    }

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
                <li className={`li ${styles.li} ${isMenuActive('/Admin/Komunitas') ? styles.active : ''}`}>
                    <Link href="/Admin/Komunitas">Komunitas</Link>
                </li>
                <li className={`li ${styles.li} ${isMenuActive('/Admin/Profil') ? styles.active : ''}`}>
                    <Link href="/Admin/Profil">Profil</Link>
                </li>
                <li className={styles.li}>
                    <Link href='#' onClick={handleModal}>Keluar</Link>
                </li>
            </ul>
            <Modal
                isOpen={openModal} 
                onRequestClose={() => setOpenModal(false)}
                className={styles.modalOverlay}
            >
                <div className={styles.modalContent}>
                    <p>Anda yakin ingin keluar?</p>
                    <div className={styles.button}>
                        <button className={styles.buttonTutup} onClick={() => setOpenModal(false)}>Tutup</button>
                        <button className={styles.buttonKonfirmasi} onClick={handleLogout}>Ya</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default AdminSidebar;
