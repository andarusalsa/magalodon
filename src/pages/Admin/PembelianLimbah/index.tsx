import AdminLayout from '../../../components/layout/AdminLayout'
import styles from './pembelian.module.css'
import { Tab } from '@headlessui/react'
import classNames from 'classnames'

const PembelianLimbah = () => {
    return (
        <AdminLayout>
            <div className={styles.container}>
                <h1>Data Pembelian</h1>
                <div className={styles.containerTab}>
                    <Tab.Group>
                        <Tab.List className={styles.tabList}>
                            <Tab className={({selected})=>classNames(styles.tab, selected && styles.tabActive)}>Menunggu Persetujuan</Tab>
                            <Tab className={({selected})=>classNames(styles.tab, selected && styles.tabActive)}>Konfirmasi Tiba</Tab>
                            <Tab className={({selected})=>classNames(styles.tab, selected && styles.tabActive)}>Selesai</Tab>
                        </Tab.List>
                        <Tab.Panels className={styles.tabPanels}>
                            <Tab.Panel>
                                <table className={styles.table}>
                                    <thead>
                                        <tr className={styles.tr}>
                                            <th className={styles.th}>ID</th>
                                            <th className={styles.th}>Tanggal</th>
                                            <th className={styles.th}>Produk</th>
                                            <th className={styles.th}>Konfirmasi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className={styles.tr}>
                                            <td className={styles.td}>1</td>
                                            <td className={styles.td}>12/12/2021</td>
                                            <td className={styles.td}>5kg Maggot</td>
                                            <td className={styles.td}>Selesai</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Tab.Panel>
                            <Tab.Panel></Tab.Panel>
                            <Tab.Panel></Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </AdminLayout>
    );
}

export default PembelianLimbah;
