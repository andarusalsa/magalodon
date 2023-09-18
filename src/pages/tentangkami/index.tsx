import styles from './tentangkami.module.css'
import Image from 'next/image'
import produk2 from '../../components/elements/Produk2.png'
import produk3 from '../../components/elements/Produk3.png'

const AboutPage = () => {
    return(
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
                        <p> Tumpukan sampah menjadi permasalahan utama terkhususnya di negara berkembang, berdasarakan data yang ada, sampah organk yang dihasilkan dari kegitan domestik seperti rumah tangga, rumah makan, dan pasar menempati proporsi terbesar. </p>
                    </div>
                </div>
            </section>

            <section className={styles.bannerTiga}>
                <div className={styles.bannerContent}>
                    <div className={styles.text1}>
                        <p>di sisi lain harga pakan ternak khususnya ikan dan unggas yang semakin tinggi juga turut mempengaruhi harga jual dari ternak tersebut, selain itu penggunaan pakan berbahan dasar kimia atau non organik juga dapat berdampak bagi siapapun yang mengkonsumsinya</p>
                    </div>
                    <div className={styles.imageContainer}>
                        <Image src={produk3} alt="produk3" className={styles.produk3} />
                    </div>
                </div>  
            </section>
        </div>
    );
};

export default AboutPage;

