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
                        <Tab.List className={styles.tabList}>
                            <Tab className={({selected})=>classNames(styles.tab, selected && styles.tabActive)}>Menunggu Persetujuan</Tab>
                            <Tab className={({selected})=>classNames(styles.tab, selected && styles.tabActive)}>Sedang Proses</Tab>
                            <Tab className={({selected})=>classNames(styles.tab, selected && styles.tabActive)}>Telah Sampai</Tab>
                        </Tab.List>
                        <Tab.Panels className={styles.tabPanels}>
                            <Tab.Panel>
                                <div className={styles.list}>
                                    <div className={styles.itemKiri}>
                                        <div className={styles.item1}>
                                            <p>2 Juli 2023</p>
                                        </div>
                                        <div className={styles.item2}>
                                            5 Kilogram Maggot
                                        </div>
                                    </div>
                                    <div className={styles.itemKanan}>
                                        <p>estimasi pendapatan Rp. 500.000</p>
                                    </div>
                                </div>
                                <hr/>
                            </Tab.Panel>

                            <Tab.Panel>
                                <Link href={'/status'} className={styles.list}>
                                    <div className={styles.itemKiri}>
                                        <div className={styles.item1}>
                                            <p>2 Juli 2023</p>
                                        </div>
                                        <div className={styles.item2}>
                                            5 Kilogram Maggot
                                        </div>
                                    </div>
                                    <div className={styles.itemKanan}>
                                        <p>penjualanmu sudah disetujui, konfirmasi jika pesananmu sudah kamu kirim</p>
                                    </div>
                                </Link>
                                <hr/>
                            </Tab.Panel>

                            <Tab.Panel>
                                <Link href={'/status'} className={styles.list}>
                                    <div className={styles.itemKiri}>
                                        <div className={styles.item1}>
                                            <p>2 Juli 2023</p>
                                        </div>
                                        <div className={styles.item2}>
                                            5 Kilogram Maggot
                                        </div>
                                    </div>
                                    <div className={styles.itemKanan}>
                                        <p>maggotmu telah sampai, konfirmasi jika uangmu sudah diterima</p>
                                    </div>
                                </Link>
                                <hr/>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </div>
    )
}

export default StatusPenjualan