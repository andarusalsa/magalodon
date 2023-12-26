import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './AS.module.css'
import Modal from 'react-modal'
import { Home, FilePlus, FileMinus, FileText, MessageSquare, User, LogOut } from 'react-feather'


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
        <div className={styles.adminSidebar}>
            <ul className={styles.ul}>
                <li className={`li ${styles.li} ${isMenuActive('/Admin/Dashboard') ? styles.active : ''}`}>
                    <Link className={styles.link} href="/Admin/Dashboard">
                        <Home className={styles.icon}/>
                        <p className={styles.judulMenu}>Dashboard</p>
                    </Link>
                </li>
                <li className={`li ${styles.li} ${(isPembelianOpen) ? styles.active : ''}`}
                    onClick={() => setIsPembelianOpen(!isPembelianOpen)}>
                    <div 
                        onClick={() => setIsPembelianOpen(!isPembelianOpen)}
                        className={`${styles.menuItem} ${isMenuActive('/Admin/PembelianMaggot') || isMenuActive('/Admin/PembelianLimbah')  ? styles.active : ''}`}
                    >
                        <FilePlus className={styles.icon}/>
                        <p className={styles.judulMenu}>Pembelian</p>
                    </div>
                    {isPembelianOpen && (
                        <ul className={styles.dropdown}>
                            <li className={styles.dropdownItem}><Link href="/Admin/PembelianMaggot">Maggot</Link></li>
                            <li className={styles.dropdownItem}><Link href="/Admin/PembelianLimbah">Limbah</Link></li>
                        </ul>
                    )}
                </li>
                <li className={`li ${styles.li} ${isMenuActive('/Admin/Penjualan') ? styles.active : ''}`}>
                    <Link className={styles.link} href="/Admin/Penjualan">
                        <FileMinus className={styles.icon}/>
                        <p className={styles.judulMenu}>Penjualan</p>
                    </Link>
                </li>
                <li className={`li ${styles.li} ${isMenuActive('/Admin/Kerjasama') ? styles.active : ''}`}>
                    <Link className={styles.link} href="/Admin/Kerjasama">
                        <FileText className={styles.icon}/>
                        <p className={styles.judulMenu}>Data Kerjasama</p>
                    </Link>
                </li>
                <li className={`li ${styles.li} ${isMenuActive('/Admin/Komunitas') ? styles.active : ''}`}>
                    <Link className={styles.link} href="/Admin/Komunitas">
                        <MessageSquare className={styles.icon}/>
                        <p className={styles.judulMenu}>Komunitas</p>
                    </Link>
                </li>
                <li className={`li ${styles.li} ${isMenuActive('/Admin/Profil') ? styles.active : ''}`}>
                    <Link className={styles.link} href="/Admin/Profil">
                        <User className={styles.icon}/>
                        <p className={styles.judulMenu}>Profil</p>
                    </Link>
                </li>
                <li className={styles.li}>
                    <Link className={styles.link} href='#' onClick={handleModal}>
                        <LogOut className={styles.icon}/>
                        <p className={styles.judulMenu}>Keluar</p>
                    </Link>
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
                        <button className={styles.buttonTutup} onClick={() => setOpenModal(false)}>Batal</button>
                        <button className={styles.buttonKonfirmasi} onClick={handleLogout}>Ya</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default AdminSidebar;
