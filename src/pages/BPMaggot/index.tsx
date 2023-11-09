import styles from './bpmaggot.module.css'
import { Tab } from '@headlessui/react'
import classNames from 'classnames'
import TextInput from "@/components/fragments/inputText/inputText"
import React, { useState } from "react";
import Link from 'next/link'
import profil from '@/components/elements/profil.png'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBell as faBellOutline} from '@fortawesome/free-regular-svg-icons'
import {LogOut, Check, X} from 'react-feather'
import Modal from 'react-modal'
import AppShell from '@/components/layout/Appshell'
import TabContentMaggot from '@/components/fragments/Komunitas/BPMaggot'

const BPMaggot = () => {
    const [nama, setnama] = useState("")
    const [nomor, setNomor] = useState("")
    const [norek, setnorek] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("Pilih Kategori")
    const [jumlah, setjumlah] = useState<number>(0)
    const [harga, setharga] = useState<number>(0)
    const [error, setError] = useState<string>('')
    const [modalLogout, setModalLogout] = useState(false)
    const [modalSell, setModalSell] = useState(false)
    const [modalSuccess, setModalSuccess] = useState(false)

    const countWords = (text: string) => {
        if (text.trim() === "") {
            return 0;
        }
        const words = text.trim().split(/\s+/);
        return words.length;
    };  

    const handlenamaChange = (newnama: string) => {
        setnama(newnama);
    }

    const handleNomorChange = (newNomor: string) => {
        setNomor(newNomor);
    }

    const handlenorekChange = (newnorek: string) => {
        setnorek(newnorek);
    }

    const handlejumlahChange = (newjumlah: string) => {
        if (isNaN(parseInt(newjumlah))) {
            setharga(0);
            setjumlah(0);
            setError('');
        } else {
            const parsedValue = parseInt(newjumlah);
            const Total = parsedValue * 10000;
            setharga(Total);
            setjumlah(parsedValue);
        }
    }

    const handleLogout = () => {
        setModalLogout(true)
    }

    const handleConfirmLogout = () => {
        window.location.href = '/beranda';
    }

    const handleSell = () => {
        if (!nama || !nomor || selectedCategory === 'Pilih Kategori' || !norek || jumlah <= 0) {
            setError('Semua kolom harus diisi dengan benar');
        } else {
            setModalSell(true);
        }
    }

    const handleSuccess = () =>{
        setModalSell(false)
        setModalSuccess(true);
        setTimeout(() => {
            setModalSuccess(false);
        }, 2000); 
    }

    return (
        <AppShell withHeaderAndFooter={true}>
        <div className={styles.container}>
            <section className={styles.bannerSatu}>
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
                    <button className={styles.logout} onClick={handleLogout}>
                        <LogOut className={styles.logout}/>
                    </button>
                    <Modal
                        isOpen={modalLogout}
                        onRequestClose={() => setModalLogout(false)}
                        className={styles.ModalOverlay}
                        overlayClassName={styles.ModalOverlay}
                    >
                        <div className={styles.ModalContent}>
                            <p>Anda yakin ingin keluar?</p>
                            <button onClick={() => setModalLogout(false)}>Kembali</button>
                            <button onClick={handleConfirmLogout}>Ya</button>
                        </div>
                    </Modal>
                </div>
            </section>
                
            <section className={styles.containerTab}>
                <Tab.Group>
                    <Tab.List className={styles.tabList}>
                        <Tab className={({selected})=>classNames(styles.tab, selected && styles.tabActive)}>TemanMaggot</Tab>
                        <Tab className={({selected})=>classNames(styles.tab, selected && styles.tabActive)}>WarungMaggot</Tab>
                        <Tab className={({selected})=>classNames(styles.tab, selected && styles.tabActive)}>Kalkupro</Tab>
                    </Tab.List>

                    <Tab.Panels className={styles.tabPanels}>
                        <Tab.Panel>
                            <TabContentMaggot/>
                        </Tab.Panel>

                        <Tab.Panel>
                            <div className={styles.containerTab}>
                                <div className={styles.catatan}>
                                    <p><span className={styles.judulCatatan}>Catatan :</span>
                                    <br/>1. Pengiriman produk hanya dapat dikirimkan ketika penjualanmu sudah disetujui oleh Magalodon. Status penjualan dapat dilihat <Link href='./BPMaggot/profil/StatusPenjualan' className={styles.linkCatat}>di sini.</Link>
                                    <br/>2. Pastikan tuliskan setidaknya ID Pesananmu di produk yang akan kamu kirim.</p>
                                </div>
                                <div className={styles.contentTab2}>
                                    <div className={styles.form}>
                                        <p className={styles.judul}>Nama</p>
                                        <TextInput placeholder='Nama' value={nama} onInputChange={handlenamaChange}/>
                                    </div>
                                    <div className={styles.form}>
                                        <p className={styles.judul}>Nomor Telepon</p>
                                        <TextInput placeholder='Nomor Telepon' value={nomor} onInputChange={handleNomorChange}/>
                                    </div>
                                    <div className={styles.form}>
                                        <p className={styles.judul}>Nama Bank</p>
                                        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className={styles.bankOption}>
                                            <option value="Pilih Kategori">Pilih Bank</option>
                                            <option value="BRI">BRI</option>
                                            <option value="BNI">BNI</option>
                                            <option value="BCA">BCA</option>
                                        </select>
                                    </div>
                                    <div className={styles.form}>
                                        <p className={styles.judul}>Nomor Rekening</p>
                                        <TextInput placeholder='Nomor Rekening' value={norek} onInputChange={handlenorekChange}/>
                                    </div>
                                    <div className={styles.form}>
                                        <p className={styles.judul}>Jumlah yang ingin dijual</p>
                                        <TextInput 
                                        type="number" 
                                        placeholder='Masukkan jumlah dengan satuan kilogram' 
                                        value={jumlah.toString()} 
                                        onInputChange={(newValue) => handlejumlahChange(newValue)}
                                        />
                                        <p className={styles.ket2}>*Masukkan jumlah dengan satuan kilogram</p>
                                    </div>
                                    <div className={styles.hasil}>
                                        <p className={styles.judul1}>Estimasi Pendapatan : Rp. {harga}</p>
                                    </div>
                                    <div>
                                        <button className={styles.button} onClick={handleSell}>Jual</button>
                                    </div>
                                    {error && <p className={styles.error}>{error}</p>}
                                    <Modal 
                                        isOpen={modalSell} 
                                        onRequestClose={handleSell} 
                                        className={styles.ModalOverlay} 
                                        overlayClassName={styles.ModalOverlay}
                                    >
                                        <div className={styles.Sell}>
                                            <p>Anda yakin data yang diisi sudah sesuai?</p>
                                            <div className={styles.sellOption}>
                                                <button onClick={() => setModalSell(false)} className={styles.buttonSellNo}>Tidak</button>
                                                <button onClick={handleSuccess} className={styles.buttonSellYes}>Ya</button>
                                            </div>
                                        </div>
                                    </Modal>
                                    <Modal
                                        isOpen={modalSuccess} 
                                        onRequestClose={() => setModalSuccess(false)}
                                        contentLabel="Daftar Berhasil"
                                        className={styles.ModalOverlay1}>
                                        <div className={styles.ModalContent1}>
                                            <Check className={styles.check}/>
                                            <p>Berhasil dikirim!</p>
                                            <p>Kamu bisa cek status penjualanmu di menu Profil</p>
                                        </div>
                                    </Modal>
                                </div>
                            </div>
                        </Tab.Panel>

                        <Tab.Panel>
                        <div className={styles.containerTab1}>
                                <div className={styles.contentTab3}>
                                    <div className={styles.form3}>
                                        <div className={styles.col1}>
                                            <p className={styles.col1}>Jumlah yang ingin dijual</p>
                                            <div className={styles.col2}>
                                                <TextInput 
                                                    type="number" 
                                                    placeholder='Masukkan jumlah dengan satuan kilogram' 
                                                    value={jumlah.toString()} 
                                                    onInputChange={(newValue) => handlejumlahChange(newValue)}
                                                />
                                               <p className={styles.ket3}>*Masukkan jumlah dengan satuan kilogram</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.hasil3}>
                                        <p className={styles.judul1}>Estimasi Pendapatan</p>
                                        <p className={styles.harga}>Rp. {harga}</p>
                                    </div>
                                    <div>
                                        <p className={styles.ket4}>Pendapatan yang Anda lihat selalu berubah mengikuti perubahan harga terbaru</p>
                                    </div>
                                </div> 
                            </div>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </section>
        </div>
        </AppShell>
    );
};

export default BPMaggot;