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
    tanggalTiba: string;
    nama: string;
    produk: string;
    jumlah: number;
    total: number;
    norek: number;
    bank: string;
    alamat: string;
}

const KerjaSama = () => {
    const [data, setData] = useState<PembelianData[]>([
        {
            id: 1234,
            tanggalPengajuan: '12/12/2021',
            tanggalTiba: '17/12/2021',
            nama: 'salsa',
            produk: '5kg Limbah',
            jumlah: 5,
            total: 50000,
            norek: 12345898765,
            bank: 'mandiri',
            alamat: 'Jl. Gunung Terang'
        },
        {
            id: 2234,
            tanggalPengajuan: '13/12/2021',
            tanggalTiba: '17/12/2021',
            nama: 'andaru',
            produk: '10kg Limbah',
            jumlah: 10,
            total: 100000,
            norek: 98767652,
            bank: 'BRI',
            alamat: 'Jl. Kemiling'
        },
    ]);
    
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = data.filter((item) => {
        const productLowerCase = item.produk.toLowerCase();
        const dateLowerCase = item.tanggalPengajuan.toLowerCase();
        const id = item.id.toString();
        const idLowerCase= id.toLowerCase();
        const jumlah = item.jumlah.toString();
        const total = item.total.toString();
        const jumlahLowerCase = jumlah.toLowerCase();
        const namaLowerCase = item.nama.toLowerCase();
        const totalLowerCase = total.toLowerCase();
        const searchTermLowerCase = searchTerm.toLowerCase();

        console.log('productLowerCase:', productLowerCase);
        console.log('dateLowerCase:', dateLowerCase);
        console.log('idLowerCase:', idLowerCase);
        console.log('jumlahLowerCase:', jumlahLowerCase);
        console.log('totalLowerCase:', totalLowerCase);
        console.log('searchTermLowerCase:', searchTermLowerCase);
        console.log('Matching:', productLowerCase.includes(searchTermLowerCase));

        return (
            productLowerCase.includes(searchTermLowerCase) ||
            dateLowerCase.includes(searchTermLowerCase) ||
            idLowerCase.includes(searchTermLowerCase)
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
                                            <th className={styles.th1}>Alamat</th>
                                            <th className={styles.th1}>Tanggal Pengajuan</th>
                                            <th className={styles.th1}>Tanggal Tiba</th>
                                            <th className={styles.th1}>Produk</th>
                                            <th className={styles.th1}>Jumlah</th>
                                            <th className={styles.th1}>Total</th>
                                            <th className={styles.th1}>Bank</th>
                                            <th className={styles.th1}>No. Rekening</th>
                                            <th className={styles.th1}>Bukti Transfer</th>
                                            <th className={styles.th1}> </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredData.map((item, index) => (
                                            <tr key={index} className={styles.tr}>
                                                <td className={styles.td1}>{item.id}</td>
                                                <td className={styles.td1}>{item.nama}</td>
                                                <td className={styles.td1}>{item.alamat}</td>
                                                <td className={styles.td1}>{item.tanggalPengajuan}</td>
                                                <td className={styles.td1}>{item.tanggalTiba}</td>
                                                <td className={styles.td1}>{item.produk}</td>
                                                <td className={styles.td1}>{item.jumlah}</td>
                                                <td className={styles.td1}>{item.total}</td>
                                                <td className={styles.td1}>{item.bank}</td>
                                                <td className={styles.td1}>{item.norek}</td>
                                                <td className={styles.td1}>
                                                    <div className={styles.imageContainer}>
                                                    <Image src={buktiTF} alt="Bukti Transfer" className={styles.buktiTF} />
                                                    </div>
                                                </td>
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
