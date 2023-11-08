import React, { useState } from "react"
import styles from "./kontak.module.css"
import TextInput from "@/components/fragments/inputText/inputText"
import AutoAdjustingTextInput from "@/components/fragments/inputText/autoAdjusting"
import AppShell from "@/components/layout/Appshell"

const Kontak = () => {
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [pesan, setPesan] = useState("");

    const handleNamaChange = (newNama: string) => {
        setNama(newNama);
    }

    const handleEmailChange = (newEmail: string) => {
        setEmail(newEmail);
    }

    const handlePesanChange = (newPesan: string) => {
        setPesan(newPesan);
    }

    return (
        <AppShell withHeaderAndFooter={true}>
        <div className={styles.container}>
            <section className={styles.bannerSatu}>
                <div className={styles.text}>
                    <h2> Hubungi Kami </h2>
                </div>
            </section>

            <section className={styles.bannerDua}>
                <div className={styles.containerInput}>
                    <div className={styles.isian}>
                        <div className={styles.isian1}>
                            <p>Nama</p>
                            <div className={styles.wrapper1}>
                                <TextInput placeholder="Masukkan nama" value={nama} onInputChange={handleNamaChange}/>
                            </div>
                        </div>
                        <div className={styles.isian2}>
                            <p>Email</p>
                            <div className={styles.wrapper1}>
                                <TextInput placeholder="Masukkan email" value={email} onInputChange={handleEmailChange} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.isian3}>
                            <p className={styles.text3}>Pesan atau Pertanyaan</p>
                            <div className={styles.wrapper}>
                                <AutoAdjustingTextInput className={styles.textArea} placeholder="Masukkan pesan atau pertanyaanmu" value={pesan} onChange={handlePesanChange}/>
                            </div>
                            <button className={styles.button}>Kirim</button>
                    </div>
                </div>
            </section>

            <section className={styles.bannerTiga}>
                <div className={styles.bannerContent}>
                    <div className={`${styles.text1} ${styles.textAnimation}`}>
                        <p> Kami sangat terbuka untuk menyambut kehadiran Anda semua. Jangan ragu untuk mengunjungi kami di berbagai platform media sosial yang kami kelola. </p>
                    </div>
                </div>
            </section>
        </div>
        </AppShell>
    );
}

export default Kontak;

