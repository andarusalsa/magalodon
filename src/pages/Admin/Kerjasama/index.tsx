import AdminLayout from '../../../components/layout/AdminLayout'
import styles from './ks.module.css'
import { Tab } from '@headlessui/react'
import classNames from 'classnames'
import { useState } from 'react'
import { Search, Upload, Edit, Trash, Download } from 'react-feather'
import Modal from 'react-modal'
import Image from 'next/image'
import buktiTF from '@/components/elements/buktiTF.jpg'

interface PembelianData {
    id: number;
    tanggalPengajuan: string;
    nama: string;
    notelp: string;
}

const KerjaSama = () => {
    const [data, setData] = useState<PembelianData[]>([
        {
            id: 1234,
            tanggalPengajuan: '12/12/2021',
            nama: 'salsa',
            notelp: '089676445689'
        },
        {
            id: 2234,
            tanggalPengajuan: '13/12/2021',
            nama: 'andaru',
            notelp: '09212873910'
        },
    ]);
    
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = data.filter((item) => {
        const date = item.tanggalPengajuan.toLowerCase()
        const id = item.id.toString()
        const nama = item.nama.toLowerCase()
        const notelp = item.notelp.toLowerCase()

        const idLowerCase= id.toLowerCase()
        const namaLowerCase = nama.toLowerCase()
        const notelpLowerCase = notelp.toLowerCase()
        const dateLowercase = date.toLowerCase()
        const searchTermLowerCase = searchTerm.toLowerCase()

        console.log('dateLowerCase:', dateLowercase)
        console.log('idLowerCase:', idLowerCase)
        console.log('namaLowerCase:', namaLowerCase)
        console.log('notelpLowerCase:', notelpLowerCase)
        console.log('searchTermLowerCase:', searchTermLowerCase)
        console.log('Matching:', date.includes(searchTermLowerCase))
        console.log('Matching:', id.includes(searchTermLowerCase))
        console.log('Matching:', nama.includes(searchTermLowerCase))
        console.log('Matching:', notelp.includes(searchTermLowerCase))

        return (
            idLowerCase.includes(searchTermLowerCase) ||
            dateLowercase.includes(searchTermLowerCase) ||
            namaLowerCase.includes(searchTermLowerCase) ||
            notelpLowerCase.includes(searchTermLowerCase)
        );
    });

    const [modalDetailAju, setModalDetailAju] = useState(false);
    const [modalConfAju, setModalConfAju] = useState(false);
    const [modalDetailTiba, setModalTiba] = useState(false);
    const [modalconfTiba, setModalConfTiba] = useState(false);

    const handleDetailAju = () => {
        setModalDetailAju(true);
    }

    const handleConfAju = () => {
        setModalConfAju(true);
    }

    const handleDetailTiba = () => {
        setModalTiba(true);
    }

    const handleConfTiba = () => {
        setModalConfTiba(true);
    }

    return (
        <AdminLayout>
            <div className={styles.container}>
                <h1>Data Pembelian Limbah</h1>
                    <div className={styles.containerTab}>
                        <div className={styles.up}>
                            <div className={styles.inputSearch1}>
                                <Search className={styles.iconSearch}/>
                                <input
                                    type="text"
                                    placeholder="Cari..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className={styles.input}
                                />
                            </div>
                            <button className={styles.download}> 
                                <p>Download Excel</p>
                                <Download className={styles.iconDownload}/>
                            </button>
                        </div>
                        <table className={styles.table}>
                            <thead>
                                <tr className={styles.tr}>
                                    <th className={styles.th1}>ID</th>
                                    <th className={styles.th1}>Nama</th>
                                    <th className={styles.th1}>Tanggal Pengajuan</th>
                                    <th className={styles.th1}>Nomor Telepon</th>
                                    <th className={styles.th1}> </th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.map((item, index) => (
                                    <tr key={index} className={styles.tr}>
                                        <td className={styles.td1}>{item.id}</td>
                                        <td className={styles.td1}>{item.nama}</td>
                                        <td className={styles.td1}>{item.tanggalPengajuan}</td>
                                        <td className={styles.td1}>{item.notelp}</td>
                                        <td className={styles.td1}>
                                            <div className={styles.button}>
                                                <button className={styles.buttonEdit}><Edit className={styles.iconEdit}/></button>
                                                <button className={styles.buttonHapus}><Trash className={styles.iconHapus}/></button>
                                            </div>
                                        </td>
                                    </tr>
                                        ))}
                            </tbody>
                        </table>
                    </div>
            </div>
        </AdminLayout>
    );
}

export default KerjaSama;
