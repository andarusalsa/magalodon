import AdminLayout from '../../../components/layout/AdminLayout'
import styles from './dashboard.module.css'
import MyChart from '../../../components/fragments/Chart/chart'
import Image from 'next/image'
import buy from '@/components/elements/adminBuy.png'
import sell from '@/components/elements/adminSell.png'
import partner from '@/components/elements/adminPartner.png'
import { Circle } from 'react-feather'

const Dashboard = () => {
    return (
        <AdminLayout>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.judul}>
                        <h2>Ringkasan</h2>
                    </div>
                    <div className={styles.card1}>
                        <div className={styles.card2}>
                            <h2>100 Kg</h2>
                            <p className={styles.p1}>Pembelian</p>
                            <div className={styles.p2}>
                                <p>50kg Maggot <br/>50kg Limbah</p>
                            </div>
                        </div>
                        <div className={styles.card3}>
                            <h2>100 Kg</h2>
                            <p className={styles.p1}>Penjualan</p>
                            <div className={styles.p2}>
                                <p>50kg Maggot <br/>50kg Limbah</p>
                            </div>
                        </div>
                        <div className={styles.card4}>
                            <h2>100</h2>
                            <p className={styles.p1}>Kerjasama</p>
                            <div className={styles.p2}>
                                <p>100 Instansi telah bekerjasama</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.content2}>
                        <div className={styles.chart}>
                            <MyChart />
                        </div>
                        <div className={styles.activity}>
                            <h2>Aktivitas Terbaru</h2>
                            <div className={styles.aktivitas}>
                                <Circle className={styles.circle} />
                                <div className={styles.keterangan}>
                                    <p className={styles.ketAktivitas}>Pengajuan PM124</p>
                                    <p className={styles.ketWaktu}>15m lalu</p>
                                </div>
                            </div>
                            <div className={styles.aktivitas}>
                                <Circle className={styles.circle} />
                                <div className={styles.keterangan}>
                                    <p className={styles.ketAktivitas}>PM123 telah dikirim, konfirmasi barang sampai</p>
                                    <p className={styles.ketWaktu}>15m lalu</p>
                                </div>
                            </div>
                            <div className={styles.aktivitas}>
                                <Circle className={styles.circle1} />
                                <div className={styles.keterangan}>
                                    <p className={styles.ketAktivitas}>PM121 telah dikirim, konfirmasi barang sampai</p>
                                    <p className={styles.ketWaktu}>20m lalu</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

export default Dashboard;