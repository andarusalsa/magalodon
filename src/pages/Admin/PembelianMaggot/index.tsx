import AdminLayout from '../../../components/layout/AdminLayout'
import styles from './pembelian.module.css'
import { Tab } from '@headlessui/react'
import classNames from 'classnames'
import { useState } from 'react'
import { Search, Upload } from 'react-feather'
import Modal from 'react-modal'

interface PembelianData {
    id: number;
    tanggalPengajuan: string;
    produk: string;
}

const PembelianMaggot = () => {
    const [data, setData] = useState<PembelianData[]>([
        {
            id: 1234,
            tanggalPengajuan: '12/12/2021',
            produk: '5kg Maggot'
        },
        {
            id: 2234,
            tanggalPengajuan: '13/12/2021',
            produk: '10kg Maggot'
        },
    ]);
    
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = data.filter((item) => {
        const productLowerCase = item.produk.toLowerCase();
        const dateLowerCase = item.tanggalPengajuan.toLowerCase();
        const id = item.id.toString();
        const idLowerCase= id.toLowerCase();
        const searchTermLowerCase = searchTerm.toLowerCase();
        console.log('productLowerCase:', productLowerCase);
        console.log('dateLowerCase:', dateLowerCase);
        console.log('idLowerCase:', idLowerCase);
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
                <h1>Data Pembelian Maggot</h1>
                <div className={styles.containerTab}>
                    <Tab.Group>
                        <Tab.List className={styles.tabList}>
                            <Tab className={({selected})=>classNames(styles.tab, selected && styles.tabActive)}>Menunggu Persetujuan</Tab>
                            <Tab className={({selected})=>classNames(styles.tab, selected && styles.tabActive)}>Konfirmasi Tiba</Tab>
                            <Tab className={({selected})=>classNames(styles.tab, selected && styles.tabActive)}>Selesai</Tab>
                        </Tab.List>
                        <Tab.Panels className={styles.tabPanels}>
                            <Tab.Panel>
                                <div className={styles.inputSearch}>
                                    <Search className={styles.iconSearch}/>
                                    <input
                                        type="text"
                                        placeholder="Cari..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className={styles.input}
                                    />
                                </div>
                                <table className={styles.table}>
                                    <thead>
                                        <tr className={styles.tr}>
                                            <th className={styles.th}>ID</th>
                                            <th className={styles.th}>Tanggal Pengajuan</th>
                                            <th className={styles.th}>Produk</th>
                                            <th className={styles.th}>Konfirmasi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredData.map((item, index) => (
                                            <tr key={index} className={styles.tr}>
                                                <td className={styles.td}>{item.id}</td>
                                                <td className={styles.td}>{item.tanggalPengajuan}</td>
                                                <td className={styles.td}>{item.produk}</td>
                                                <td className={styles.td}>
                                                    <div className={styles.button}>
                                                    <button className={styles.buttonKonfirmasi}  onClick={handleDetailAju}>Konfirmasi</button>
                                                    </div>
                                                    <Modal 
                                                        isOpen={modalDetailAju} 
                                                        onRequestClose={() => setModalDetailAju(false)}
                                                        className={styles.modalOverlay}
                                                    >
                                                        <div className={styles.modalContent}>
                                                            <p className={styles.judulDetail}>Detail</p>
                                                            <div className={styles.detail}>
                                                                <div className={styles.subJudul}>
                                                                    <p className={styles.modalDetail1}>ID</p>
                                                                    <p className={styles.modalDetail1}>Nama</p>
                                                                    <p className={styles.modalDetail1}>Alamat</p>
                                                                    <p className={styles.modalDetail1}>Jumlah yang dijual</p>
                                                                    <p className={styles.modalDetail1}>Bank</p>
                                                                    <p className={styles.modalDetail1}>No. Rekening</p>
                                                                    <p className={styles.modalDetail1}>Jumlah yang harus dibayar</p>
                                                                </div>
                                                                <div className={styles.isi}>
                                                                    <p className={styles.modalDetail2}>: 2234</p>
                                                                    <p className={styles.modalDetail2}>: Salsa</p>
                                                                    <p className={styles.modalDetail2}>: Jl. Melati</p>
                                                                    <p className={styles.modalDetail2}>: 5 Kg</p>
                                                                    <p className={styles.modalDetail2}>: BRI</p>
                                                                    <p className={styles.modalDetail2}>: 1234872</p>
                                                                    <p className={styles.modalDetail2}>: Rp. 50.000</p>
                                                                </div>
                                                            </div>
                                                            <button className={styles.buttonTutup} onClick={() => setModalDetailAju(false)}>Tutup</button>
                                                            <button className={styles.buttonKonfirmasi} onClick={() => setModalDetailAju(false)}>Konfirmasi</button>
                                                        </div>
                                                    </Modal>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </Tab.Panel>

                            <Tab.Panel>
                            <div className={styles.inputSearch}>
                                    <Search className={styles.iconSearch}/>
                                    <input
                                        type="text"
                                        placeholder="Cari..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className={styles.input}
                                    />
                                </div>
                                <table className={styles.table}>
                                    <thead>
                                        <tr className={styles.tr}>
                                            <th className={styles.th}>ID</th>
                                            <th className={styles.th}>Tanggal Pengajuan</th>
                                            <th className={styles.th}>Produk</th>
                                            <th className={styles.th}>Konfirmasi Pembayaran</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredData.map((item, index) => (
                                            <tr key={index} className={styles.tr}>
                                                <td className={styles.td}>{item.id}</td>
                                                <td className={styles.td}>{item.tanggalPengajuan}</td>
                                                <td className={styles.td}>{item.produk}</td>
                                                <td className={styles.td}>
                                                    <div className={styles.button}>
                                                        <button className={styles.buttonKonfirmasi1} onClick={handleDetailTiba}>Lihat Detail</button>
                                                        <button className={styles.buttonKonfirmasi1} onClick={handleConfTiba}>Konfirmasi</button>
                                                    </div>
                                                    <Modal
                                                        isOpen={modalDetailTiba}
                                                        onRequestClose={() => setModalTiba(false)}
                                                        className={styles.modalOverlay}
                                                    >
                                                        <div className={styles.modalContent}>
                                                            <p className={styles.judulDetail}>Detail</p>
                                                            <div className={styles.detail}>
                                                                <div className={styles.subJudul}>
                                                                    <p className={styles.modalDetail1}>ID</p>
                                                                    <p className={styles.modalDetail1}>Nama</p>
                                                                    <p className={styles.modalDetail1}>Alamat</p>
                                                                    <p className={styles.modalDetail1}>Jumlah yang dijual</p>
                                                                    <p className={styles.modalDetail1}>Bank</p>
                                                                    <p className={styles.modalDetail1}>No. Rekening</p>
                                                                    <p className={styles.modalDetail1}>Jumlah yang harus dibayar</p>
                                                                    <p className={styles.modalDetail1}>Status Pengantaran</p>
                                                                </div>
                                                                <div className={styles.isi}>
                                                                    <p className={styles.modalDetail2}>: 2234</p>
                                                                    <p className={styles.modalDetail2}>: Salsa</p>
                                                                    <p className={styles.modalDetail2}>: Jl. Melati</p>
                                                                    <p className={styles.modalDetail2}>: 5 Kg</p>
                                                                    <p className={styles.modalDetail2}>: BRI</p>
                                                                    <p className={styles.modalDetail2}>: 1234872</p>
                                                                    <p className={styles.modalDetail2}>: Rp. 50.000</p>
                                                                    <p className={styles.modalDetail2}>: Sudah dikonfirmasi oleh penjual</p>
                                                                </div>
                                                            </div>
                                                            <button className={styles.buttonTutup} onClick={() => setModalTiba(false)}>Tutup</button>
                                                        </div>
                                                    </Modal>
                                                    <Modal
                                                        isOpen={modalconfTiba}
                                                        onRequestClose={() => setModalConfTiba(false)}
                                                        className={styles.modalOverlay}
                                                    >   
                                                        <div className={styles.modalContent}>
                                                            <p>Apakah produk dengan :</p>
                                                            <p>ID : {item.id}</p>
                                                            <p>Produk : {item.produk}</p>
                                                            <p>Sudah kamu terima?</p>
                                                            <p>jika sudah transfer uang ke No. Rekening </p>
                                                            <p>123455</p>
                                                            <p>BRI</p>
                                                            <p>Kirim bukti transfer lalu konfirmasi</p>
                                                            <button>
                                                                <p>Upload bukti TF disini</p>
                                                                <Upload/>
                                                            </button>
                                                            <button className={styles.buttonKonfirmasi} onClick={() => setModalConfTiba(false)}>Konfirmasi</button>
                                                        </div>
                                                    </Modal>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </Tab.Panel>

                            <Tab.Panel></Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </AdminLayout>
    );
}

export default PembelianMaggot;
