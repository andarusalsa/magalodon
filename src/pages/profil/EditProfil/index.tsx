import styles from './editprofil.module.css'
import Image from 'next/image'
import profilImage from '@/components/elements/profil.png'
import Link from 'next/link'
import {ChevronLeft, FileText, Edit, HelpCircle, LogOut} from 'react-feather'
import React, { useState } from "react"
import TextInput from '@/components/fragments/inputText/inputText'

const EditProfil = () => {
    const [nama, setNama] = useState('')
    const [email, setEmail] = useState('')
    const [alamat, setAlamat] = useState('')
    const [norek, setNorek] = useState('')

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
                            <p>Edit Profil</p>
                        </Link>
                        <Link href='#' className={styles.menuUp2}>
                            <p>Simpan</p>
                        </Link>
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
                            <p>Alamat</p>
                            <TextInput type="text" value={alamat} placeholder="Masukkan Nama Lengkap" onInputChange={handleAlamatChange}/>
                        </div>
                        <div className={styles.form1}>
                            <p>Nama Bank</p>
                            <select>
                                <option>BCA</option>
                                <option>BNI</option>
                                <option>BRI</option>
                            </select>
                        </div>
                        <div className={styles.form1}>
                            <p>Nomor Rekening</p>
                            <TextInput type="text" value={norek} placeholder="Masukkan Nama Lengkap" onInputChange={handleNorekChange}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfil