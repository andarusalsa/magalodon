import styles from './answer.module.css'
import Link from 'next/link'
import {ChevronLeft} from 'react-feather'
import React from "react"
import { ChevronRight } from 'react-feather'

const AnswerFAQ = () => {
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
                        <Link href='/BPLimbah/profil/FAQ' className={styles.menuUp1}>
                            <ChevronLeft className={styles.backUp} />
                            <p>FAQ</p>
                        </Link>
                    </div>

                    <div className={styles.opsi}>
                        <div className={styles.kolom}>
                            <p>Bagaimana saya bisa menjual Limbah saya?</p>
                        </div>
                        <div className={styles.kolom}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut lorem eu dolor tristique vulputate. Integer non lacinia turpis. In ut orci hendrerit, luctus velit ut, condimentum urna. In neque nibh, imperdiet porta pharetra bibendum, aliquet ac mi. Maecenas sit amet sollicitudin nunc, congue laoreet sapien. Praesent sit amet suscipit sem. Nam in est felis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnswerFAQ