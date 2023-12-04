import styles from './tentangkami.module.css'
import Image from 'next/image'
import produk2 from '../../components/elements/Produk2.jpg'
import produk3 from '../../components/elements/Produk3.png'
import AppShell from '@/components/layout/Appshell'
import VideoPlayer from '@/components/fragments/videoPlayer/videoPlayer'   
import plate from '@/components/elements/plate.png'

const AboutPage = () => {
    return(
        <AppShell withHeaderAndFooter={true}>
        <div className={styles.container}>
            <section className={styles.bannerSatu}>
                <h2> Magalodon berupaya untuk mengurangi sampah organik sekaligus menciptakan pakan ternak yang tinggi akan protein </h2>
            </section>

            <section className={styles.bannerDua}>
                <div className={styles.bannerContent}>
                    <div className={styles.imageContainer}>
                        <Image src={produk2} alt="produk2" className={styles.produk2} />
                    </div>
                    <div className={styles.text}>
                        <h2>Bersatu untuk bumi yang lebih hijau</h2>
                        <p> Bersama kami untuk penanganan sampah organik domestik, terutama sisa pangan.</p>
                    </div>
                </div>
            </section>

            <section className={styles.bannerContent1}>
                <div className={styles.content}>
                    <div className={styles.plateContainer}>
                        <Image src={plate} alt="plate" className={styles.plate} />
                    </div>
                    <div className={styles.caption}>
                        <h2>Sustainability Starts with Your Plate</h2>
                    </div>
                </div>
            </section>


            <section className={styles.bannerTiga}>
                <div className={styles.bannerContent}>
                    <div className={styles.text1}>
                        <h2>Pakan ternak organik, solusi ekonomis dan sehat</h2>
                        <p>Magalodon hadir menghasilkan pakan organik, solusi sehat dan ekonomis untuk meningkatkan produktivitas ternak</p>
                    </div>
                    <div className={styles.imageContainer1}>
                        <Image src={produk3} alt="produk3" className={styles.produk3} />
                    </div>
                </div>  
            </section>

            <section className={styles.achieve}>
                <div className={styles.kiri}>
                    <h2>50</h2>
                    <p>Penjual Maggot<br/>bekerjasama</p>
                </div>
                <div className={styles.kanan}>
                    <h2>50 Kg</h2>
                    <p>Sisa Pangan <br/> teratasi</p>
                </div>
                <div className={styles.kanan}>
                    <h2>50</h2>
                    <p>Partner <br/> bekerjasama</p>
                </div>
            </section>

            <section className={styles.videoContainer}>
                <VideoPlayer/>
            </section>
        </div>
        </AppShell>
    );
};

export default AboutPage;
