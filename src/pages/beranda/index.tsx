import styles from './beranda.module.css'
import Appshell from '@/components/layout/Appshell'

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.banner}>
        <div className={styles.bannerContent}>
          <h1> Sustainability Feed <br/> From Your Food </h1>
          <button className={styles.bannerButton}>
          Produk Kami
          </button>
        </div>
      </section>

      <section className={styles.solusi}>
        <div className={styles.solusiContent}>
          <h2> Solusi Magalodon </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius luctus mauris quis eleifend.</p>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <h3>MaggotCare</h3>
            <p>Bersama untuk memberikan kontribusi positif bagi lingkungan sekaligus meningkatkan keberhasilan bisnis Anda!</p>
            <button className={styles.cardButton}>
              Selengkapnya
            </button>
          </div>
          <div className={styles.card}>
            <h3>TrashCare</h3>
            <p>Buat masa depan yang lebih berkelanjutan dengan mengurangi limbah pangan dan memberikan kontribusi positif terhadap lingkungan.</p>
            <button className={styles.cardButton}>
          Selengkapnya
            </button>
          </div>
          <div className={styles.card}>
            <h3>PartnerCare</h3>
            <p>Menjalin kemitraan yang kuat dan mendorong inovasi berkelanjutan. Bersama dapat mengubah dunia menjadi tempat yang lebih hijau dan berkelanjutan.</p>
            <button className={styles.cardButton}>
          Selengkapnya
            </button>
          </div>
        </div>
      </section>

      <section className={styles.promosi}>
        <div className={styles.promosiDetail}>
          <p> Nikmati pakan ikan berkelas premium yang didukung oleh <span className={styles.colorText}>maggot segar berkualitas tinggi, </span> pemanfaatan bahan baku organik dan lokal sehingga turut membantu <span className={styles.colorText}>mengurangi jumlah sampah dan meningkatkan nilai limbah pangan.</span>
Dapatkan semua keunggulan ini dan rasakan perbedaannya sekarang! Bergabunglah dengan kami dan jadilah bagian dari <span className={styles.colorText}>perubahan yang lebih baik untuk masa depan!</span>
          </p>
        </div>
      </section>
    </div>
  )
}
