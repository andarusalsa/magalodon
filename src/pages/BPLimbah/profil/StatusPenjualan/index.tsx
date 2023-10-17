import styles from './sp.module.css'
import Link from 'next/link'
import {ChevronLeft} from 'react-feather'
import React from "react"
import { Tab } from '@headlessui/react'
import classNames from 'classnames'
import { useState } from 'react'
import Modal from 'react-modal'
import Image from 'next/image'
import buktiTF from '@/components/elements/buktiTF.jpg'

const StatusPenjualan = () => {
    const [modalSP, setModalSP] = useState(false)
    const [modalConfirm, setModalConfirm] = useState(false)

    const handleModalSP = () =>{
        setModalSP(true)
    }

    const handleModalConfirm = () =>{
        setModalConfirm(true)
    }

    return (
        <div className = {styles.container}>
            <section className = {styles.bannerSatu}>
                <Link href = "/BPLimbah" className={styles.Link}> 
                    <ChevronLeft className = {styles.back} />
                    <p>Profil</p>
                </Link>
            </section>

            <div className = {styles.containerProfile}>
                <div className={styles.profilWrapper}>
                    <div className={styles.menuUp}>
                        <Link href='/BPLimbah/profil' className={styles.menuUp1}>
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
                                            5 Kilogram Limbah
                                        </div>
                                    </div>
                                    <div className={styles.itemKanan}>
                                        <p>estimasi pendapatan Rp. 500.000</p>
                                    </div>
                                </div>
                                <hr/>
                            </Tab.Panel>

                            <Tab.Panel>
                                <button onClick={handleModalSP} className={styles.list}>
                                    <div className={styles.itemKiri}>
                                        <div className={styles.item1}>
                                            <p>2 Juli 2023</p>
                                        </div>
                                        <div className={styles.item2}>
                                            5 Kilogram Limbah
                                        </div>
                                    </div>
                                    <div className={styles.itemKanan}>
                                        <p>penjualanmu sudah disetujui, konfirmasi jika pesananmu sudah kamu kirim</p>
                                    </div>
                                </button>
                                <Modal
                                    isOpen={modalSP}
                                    onRequestClose={() => setModalSP(false)}
                                    className={styles.ModalOverlay}
                                    overlayClassName={styles.ModalOverlay}
                                >
                                    <div className={styles.ModalContent}>
                                        <h2>Konfirmasi Pesananmu</h2>
                                        <p>5 Kg Limbah</p>
                                        <p>Estimasi Pendapatan: Rp.500.000</p>
                                        <p className={styles.Alamat}>Alamat Pengiriman : Jl. Perumahan Semarang</p>
                                        <button className={styles.buttonConfirm} onClick={() => setModalSP(false)}>Konfirmasi</button>
                                        <p className={styles.Note}>Klik Konfirmasi jika produkmu sudah dikirim ke alamat yang tertera di atas</p>
                                    </div>
                                </Modal>
                                <hr/>
                                <button className={styles.list}>
                                    <div className={styles.itemKiri}>
                                        <div className={styles.item1}>
                                            <p>2 Juli 2023</p>
                                        </div>
                                        <div className={styles.item2}>
                                            5 Kilogram Limbah
                                        </div>
                                    </div>
                                    <div className={styles.itemKanan}>
                                        <p>limbah pangan sudah di jalan</p>
                                    </div>
                                </button>
                                <hr/>
                            </Tab.Panel>

                            <Tab.Panel>
                                <button onClick={handleModalConfirm} className={styles.list}>
                                    <div className={styles.itemKiri}>
                                        <div className={styles.item1}>
                                            <p>2 Juli 2023</p>
                                        </div>
                                        <div className={styles.item2}>
                                            5 Kilogram Limbah
                                        </div>
                                    </div>
                                    <div className={styles.itemKanan}>
                                        <p>Limbahmu telah sampai, konfirmasi jika uangmu sudah diterima</p>
                                    </div>
                                </button>
                                <Modal
                                    isOpen={modalConfirm}
                                    onRequestClose={() => setModalConfirm(false)}
                                    className={styles.ModalOverlay}
                                    overlayClassName={styles.ModalOverlay}
                                >
                                    <div className={styles.ModalContent}>
                                        <h2>Konfirmasi Pesananmu</h2>
                                        <p>5 Kg Limbah</p>
                                        <div className={styles.imageContainer}>
                                            <Image src={buktiTF} alt="buktiTF" className={styles.buktiTF} />
                                        </div>
                                        <p>Apakah pendapatanmu sudah diterima?</p>
                                        <button className={styles.buttonConfirm} onClick={() => setModalConfirm(false)}>Konfirmasi</button>
                                        <p className={styles.Note}>Klik Konfirmasi jika produkmu sudah dikirim ke alamat yang ada di atas</p>
                                    </div>
                                </Modal>
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