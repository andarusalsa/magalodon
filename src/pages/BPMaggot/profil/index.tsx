import styles from './profil.module.css'
import Image from 'next/image'
import profilImage from '@/components/elements/profil.png'
import Link from 'next/link'
import {ChevronLeft, FileText, Edit, HelpCircle, LogOut} from 'react-feather'
import Modal from 'react-modal'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import AppShell from '@/components/layout/Appshell'

const Profil = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const router = useRouter()

    const handleKeluar = () => {
        setIsModalOpen(true)
    }

    const handleLogout = () => {
            router.push('/beranda') 
    };

    return (
        <AppShell withHeaderAndFooter={true}>
        <div className = {styles.container}>
            <section className = {styles.bannerSatu}>
                <Link href = "/BPMaggot" className={styles.Link}> 
                    <ChevronLeft className = {styles.back} />
                    <p>Profil</p>
                </Link>
            </section>

            <div className = {styles.containerProfile}>
                <div className={styles.profilWrapper}>
                    <div className={styles.profil}>
                        <Image src={profilImage} alt="profil" className={styles.foto} />
                        <p>Andaru Putri Salsabila</p>
                    </div>

                    <hr className={styles.line} />

                    <div className={styles.opsi}>
                        <Link href='/BPMaggot/profil/StatusPenjualan' className={styles.opsi1}>
                            <FileText className={styles.iconOption}/>
                            <p>Status Penjualan</p>
                        </Link>
                        <Link href='/BPMaggot/profil/EditProfil' className={styles.opsi1}>
                            <Edit className={styles.iconOption}/>
                            <p>Edit Profil</p>
                        </Link>
                        <Link href='/BPMaggot/profil/FAQ' className={styles.opsi1}>
                            <HelpCircle className={styles.iconOption}/>
                            <p>FAQ</p>
                        </Link>
                        <Link href='#' className={styles.opsi1} onClick={handleKeluar}>
                            <LogOut className={styles.iconOption}/>
                            <p>Keluar</p>
                        </Link>
                        <Modal
                            isOpen={isModalOpen}
                            contentLabel="Daftar Berhasil"
                            className={styles.ModalOverlay}
                          >
                            <div className={styles.ModalContent}>
                              <p>Anda yakin ingin keluar?</p>
                              <button onClick={() => setIsModalOpen(false)}>Batal</button>
                              <button onClick={handleLogout}>Ya</button>
                            </div>
                          </Modal>
                    </div>
                </div>
            </div>
        </div>
        </AppShell>
    )
}

export default Profil