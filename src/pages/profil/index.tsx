import styles from './profil.module.css'
import Image from 'next/image'
import profilImage from '@/components/elements/profil.png'
import Link from 'next/link'
import {ChevronLeft, FileText, Edit, HelpCircle, LogOut} from 'react-feather'

const profil = () => {
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
                    <div className={styles.profil}>
                        <Image src={profilImage} alt="profil" className={styles.foto} />
                        <p>Andaru Putri Salsabila</p>
                    </div>

                    <hr className={styles.line} />

                    <div className={styles.opsi}>
                        <Link href='/profil/StatusPenjualan' className={styles.opsi1}>
                            <FileText className={styles.iconOption}/>
                            <p>Status Penjualan</p>
                        </Link>
                        <Link href='/profil/EditProfil' className={styles.opsi1}>
                            <Edit className={styles.iconOption}/>
                            <p>Edit Profil</p>
                        </Link>
                        <Link href='/profil/FAQ' className={styles.opsi1}>
                            <HelpCircle className={styles.iconOption}/>
                            <p>FAQ</p>
                        </Link>
                        <Link href='#' className={styles.opsi1}>
                            <LogOut className={styles.iconOption}/>
                            <p>Keluar</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default profil