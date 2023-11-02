import styles from './profil.module.css'
import Image from 'next/image'
import profilImage from '@/components/elements/profil.png'
import Link from 'next/link'
import {ChevronLeft, FileText, Edit, HelpCircle, LogOut} from 'react-feather'
import React, { useState } from "react"
import TextInput from '@/components/fragments/inputText/inputText'
import Modal from 'react-modal'
import { useRouter } from 'next/router'
import AppShell from '@/components/layout/Appshell'

const EditProfil = () => {
    const [nama, setNama] = useState('')
    const [email, setEmail] = useState('')
    const [alamat, setAlamat] = useState('')
    const [norek, setNorek] = useState('')
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const router = useRouter()

    const handleNamaChange = (newNama: string) => {
        setNama(newNama);
    }

    const handleEmailChange = (newEmail: string) => {
        setEmail(newEmail);
    }

    const handleAlamatChange = (newAlamat: string) => {
        setAlamat(newAlamat);
    }

    const handleNorekChange = (newNorek: string) => {
        setNorek(newNorek);
    }

    const handleSimpanClick = () => {
        setIsModalVisible(true);
    }

    const handleSimpan = () => {
        setTimeout(() => {
            setIsModalVisible(false);
            setShowSuccessMessage(false);
            router.push('/Admin/Dashboard'); // Gunakan router dari 'next/router' di sini
        }, 3000);
    }

    return (
        <div className = {styles.container}>
            <div className = {styles.containerProfile}>
                <div className={styles.profilWrapper}>
                    <div className={styles.menuUp}>
                        <Link href='/Admin/Dashboard' className={styles.menuUp1}>
                            <ChevronLeft className={styles.backUp} />
                            <p>Edit Profil</p>
                        </Link>
                        <button className={styles.menuUp2} onClick={handleSimpanClick}>
                            <p>Simpan</p>
                        </button>
                        <Modal
                            isOpen={isModalVisible}
                            onRequestClose={() => setIsModalVisible(false)}
                            shouldCloseOnEsc={true}
                            className={styles.ModalOverlay}
                        >
                            <div className={styles.ModalContent}>
                                <h2>Anda yakin ingin menyimpan perubahan?</h2>
                                <button onClick={() => setIsModalVisible(false)}>Batal</button>
                                <button onClick={handleSimpan}>Simpan</button>
                            </div>
                        </Modal>
                    </div>

                    <div className={styles.profil}>
                        <Image src={profilImage} alt="profil" className={styles.foto} />
                        <button className={styles.editFoto}>Ubah Foto Profil</button>
                    </div>

                    <div className={styles.form}>
                        <div className={styles.form1}>
                            <p>Nama Lengkap</p>
                            <TextInput type="text" value={nama} placeholder="Masukkan Nama Lengkap" onInputChange={handleNamaChange}/>
                        </div>
                        <div className={styles.form1}>
                            <p>Email</p>
                            <TextInput type="text" value={email} placeholder="Masukkan Email" onInputChange={handleEmailChange}/>
                        </div>
                        <div className={styles.form1}>
                            <p>Kata Sandi</p>
                            <TextInput type="text" value={alamat} placeholder="Ubah Kata Sandi" onInputChange={handleAlamatChange}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfil