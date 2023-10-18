import styles from './notifikasi.module.css'
import React, { useState } from "react"
import Link from 'next/link'
import profil from '@/components/elements/profil.png'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBell as faBellOutline} from '@fortawesome/free-regular-svg-icons'
import {LogOut, ChevronLeft} from 'react-feather'
import AppShell from '@/components/layout/Appshell'

const BPMaggot = () => {

    return (
        <AppShell withHeaderAndFooter={true}>
        <div className={styles.container}>
            <div className={styles.bannerSatu}>
                <div className={styles.kiri}>
                    <Link href='/BPMaggot/profil' className={styles.ContentProfil}>
                        <Image src={profil} alt="profil" className={styles.profil} />
                        Andaru Putri Salsabila
                    </Link>
                </div>
                <div className={styles.kanan}>
                    <Link href='/BPMaggot/notifikasi'>
                        <FontAwesomeIcon icon={faBellOutline} className={styles.notifikasi}/>
                    </Link>
                    <Link href='/logout'>
                        <LogOut className={styles.logout}/>
                    </Link>
                </div>
            </div>

                
            <div className={styles.notifContainer}>
                <div className={styles.notifWrapper}>
                    <Link href='/BPMaggot' className={styles.back}>
                        <ChevronLeft className={styles.back1}/>
                        <p>Notifikasi</p>
                    </Link>

                    <hr className={styles.line}/>

                    <div className={styles.notifList}>
                        <div className={styles.notif1}>
                            <p className={styles.notifDate}>2 Juli 2023</p>
                            <p className={styles.notifText}>Ivanna Putri menyukai kirimanmu</p>
                        </div>
                    </div>

                    <hr className={styles.line}/>

                    <div className={styles.notifList}>
                        <div className={styles.notif1}>
                            <p className={styles.notifDate}>2 Juli 2023</p>
                            <p className={styles.notifText}>Ivanna Putri menyukai kirimanmu</p>
                        </div>
                    </div>

                    <hr className={styles.line}/>
                    
                </div>
            </div>
        </div>
        </AppShell>
    );
};

export default BPMaggot;