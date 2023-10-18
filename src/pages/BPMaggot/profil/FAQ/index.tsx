import styles from './faq.module.css'
import Link from 'next/link'
import {ChevronLeft} from 'react-feather'
import React from "react"
import { ChevronRight } from 'react-feather'
import AppShell from '@/components/layout/Appshell'

const FAQ = () => {
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
                    <div className={styles.menuUp}>
                        <Link href='/BPMaggot/profil' className={styles.menuUp1}>
                            <ChevronLeft className={styles.backUp} />
                            <p>FAQ</p>
                        </Link>
                    </div>

                    <div className={styles.opsi}>
                        <Link href='/BPMaggot/profil/FAQ/AnswerFAQ' className={styles.button}>
                            <p>Bagaimana saya bisa menjual maggot saya?</p>
                            <ChevronRight className={styles.iconOption}/>
                        </Link>
                        <Link href='#' className={styles.button}>
                            <p>Bagaimana saya ?</p>
                            <ChevronRight className={styles.iconOption}/>
                        </Link>
                        <Link href='#' className={styles.button}>
                            <p>Bagaimana saya bisa ?</p>
                            <ChevronRight className={styles.iconOption}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </AppShell>
    )
}

export default FAQ