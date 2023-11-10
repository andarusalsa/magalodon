import AdminLayout from '../../../components/layout/AdminLayout'
import styles from './dashboard.module.css'
import { ChevronDown } from 'react-feather'
import Image from 'next/image'
import buy from '@/components/elements/adminBuy.png'
import sell from '@/components/elements/adminSell.png'
import partner from '@/components/elements/adminPartner.png'

const Dashboard = () => {
    return (
        <AdminLayout>
            <div className={styles.container}>
                <div className={styles.judul1}>
                    <h1>Admin</h1>
                </div>
                <div className={styles.content}>
                    <div className={styles.judul}>
                        <h2>Ringkasan</h2>
                    </div>
                    <div className={styles.card1}>
                        <div className={styles.card2}>
                            <div className={styles.iconContainer}>
                                <Image src={buy} alt='buy' className={styles.icon}/>
                            </div>
                            <h2>100 Kg</h2>
                            <p className={styles.p1}>Pembelian</p>
                            <div className={styles.p2}>
                                <p>50kg Maggot <br/>50kg Limbah</p>
                            </div>
                        </div>
                        <div className={styles.card3}>
                        <div className={styles.iconContainer}>
                                <Image src={sell} alt='sell' className={styles.icon}/>
                            </div>
                            <h2>100 Kg</h2>
                            <p className={styles.p1}>Penjualan</p>
                            <div className={styles.p2}>
                                <p>50kg Maggot <br/>50kg Limbah</p>
                            </div>
                        </div>
                        <div className={styles.card4}>
                        <div className={styles.iconContainer}>
                                <Image src={partner} alt='partner' className={styles.icon}/>
                            </div>
                            <h2>100</h2>
                            <p className={styles.p1}>Kerjasama</p>
                            <div className={styles.p2}>
                                <p>100 Instansi telah bekerjasama</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

export default Dashboard;