import styles from './sp.module.css'
import Link from 'next/link'
import {ChevronLeft} from 'react-feather'
import React from "react"
import { Tab } from '@headlessui/react'
import classNames from 'classnames'

const StatusPenjualan = () => {
    return (
        <div className = {styles.container}>
            <section className = {styles.bannerSatu}>
                <Link href = "/BPMaggot" className={styles.Link}> 
                    <ChevronLeft className = {styles.back} />
                    <p>Profil</p>
                </Link>
            </section>

            <div className = {styles.containerProfile}>
                <div className={styles.profilWrapper}>
                    <div className={styles.menuUp}>
                        <Link href='/profil' className={styles.menuUp1}>
                            <ChevronLeft className={styles.backUp} />
                            <p>Status Penjualan</p>
                        </Link>
                    </div>

                    <Tab.Group>
                        <Tab.List>
                            <Tab className={({selected})=>classNames(styles.tab, selected && styles.tabActive)}>Menunggu Persetujuan</Tab>
                            <Tab className={({selected})=>classNames(styles.tab, selected && styles.tabActive)}>Sedang Proses</Tab>
                            <Tab className={({selected})=>classNames(styles.tab, selected && styles.tabActive)}>Telah Sampai</Tab>
                        </Tab.List>
                        <Tab.Panels>
                            <Tab.Panel>
                                <div className={styles.list}>
                                    
                                </div>
                            </Tab.Panel>

                            <Tab.Panel></Tab.Panel>

                            <Tab.Panel></Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </div>
    )
}

export default StatusPenjualan