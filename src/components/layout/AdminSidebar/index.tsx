import Link from 'next/link';
import styles from './AS.module.css';

const AdminSidebar = () => {
    return (
        <div className={styles.adminSidebar}>
            <h2>Admin Menu</h2>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <Link href="/admin/approval">Menyetujui Penjualan</Link>
                </li>
                <li className={styles.li}>
                    <Link href="/admin/confirmation">Konfirmasi Barang Sampai</Link>
                </li>
                <li className={styles.li}>
                    <Link href="/admin/payment-proof">Pengiriman Bukti TF</Link>
                </li>
                <li className={styles.li}>
                    <Link href="/admin/download-sales">Unduh Daftar Penjualan</Link>
                </li>
            </ul>
        </div>
    );
};

export default AdminSidebar;
