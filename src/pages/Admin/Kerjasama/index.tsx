import AdminLayout from '../../../components/layout/AdminLayout'
import styles from './ks.module.css'
import { Tab } from '@headlessui/react'
import classNames from 'classnames'
import { useState } from 'react'
import { Search, Edit, Trash, Download } from 'react-feather'

interface PembelianData {
    id: number;
    email: string;
    nama: string;
    norek: number;
    bank: string;
    alamat: string;
    sandi: string;
    nohp: number;
}

const Kerjasama = () => {
    const [data, setData] = useState<PembelianData[]>([
        {
            id: 1234,
            email: 'salsa@gmail.com',
            nama: 'salsa',
            norek: 12345898765,
            bank: 'mandiri',
            alamat: 'Jl. Gunung Terang',
            sandi: 'Salsabila34',
            nohp: 234567890
        },
        {
            id: 1234,
            email: 'kiki@gmail.com',
            nama: 'salsa',
            norek: 12345898765,
            bank: 'mandiri',
            alamat: 'Jl. Gunung Terang',
            sandi: 'Salsabila34',
            nohp: 123456789
        },
    ]);
    
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = data.filter((item) => {
        const emailLowerCase = item.email.toLowerCase();
        const norek = item.norek.toString();
        const norekLowerCase = norek.toLowerCase();
        const id = item.id.toString();
        const idLowerCase= id.toLowerCase();
        const namaLowerCase = item.nama.toLowerCase();
        const bank = item.bank.toString();
        const bankLowerCase = bank.toLowerCase();
        const sandiLowerCase = item.sandi.toLowerCase();
        const alamatLowerCase = item.alamat.toLowerCase();
        const searchTermLowerCase = searchTerm.toLowerCase();

        console.log('idLowerCase:', idLowerCase);
        console.log('emailLowerCase:', emailLowerCase);
        console.log('namaLowerCase:', namaLowerCase);
        console.log('norekLowerCase:', norekLowerCase);
        console.log('bankLowerCase:', bankLowerCase);
        console.log('alamatLowerCase:', bankLowerCase);
        console.log('searchTermLowerCase:', searchTermLowerCase);
        console.log('Matching:', namaLowerCase.includes(searchTermLowerCase));

        return (
            idLowerCase.includes(searchTermLowerCase) ||
            emailLowerCase.includes(searchTermLowerCase) ||
            namaLowerCase.includes(searchTermLowerCase) ||
            norekLowerCase.includes(searchTermLowerCase) ||
            bankLowerCase.includes(searchTermLowerCase) ||
            alamatLowerCase.includes(searchTermLowerCase) ||
            sandiLowerCase.includes(searchTermLowerCase) 
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
                    <Tab.Group>
                        <Tab.List className={styles.tabList}>
                            <Tab className={({selected})=>classNames(styles.tab, selected && styles.tabActive)}>Penjual Maggot</Tab>
                            <Tab className={({selected})=>classNames(styles.tab, selected && styles.tabActive)}>Penjual Limbah</Tab>
                            <Tab className={({selected})=>classNames(styles.tab, selected && styles.tabActive)}>Pemilik Usaha</Tab>
                        </Tab.List>
                        <Tab.Panels className={styles.tabPanels}>
                            <Tab.Panel>
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
                                            <th className={styles.th1}>ID User</th>
                                            <th className={styles.th1}>Nama</th>
                                            <th className={styles.th1}>Alamat</th>
                                            <th className={styles.th1}>Email</th>
                                            <th className={styles.th1}>Nama Bank</th>
                                            <th className={styles.th1}>Nomor Rekening</th>
                                            <th className={styles.th1}>Kata Sandi</th>
                                            <th className={styles.th1}></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredData.map((item, index) => (
                                            <tr key={index} className={styles.tr}>
                                                <td className={styles.td1}>{item.id}</td>
                                                <td className={styles.td1}>{item.nama}</td>
                                                <td className={styles.td1}>{item.alamat}</td>
                                                <td className={styles.td1}>{item.email}</td>
                                                <td className={styles.td1}>{item.bank}</td>
                                                <td className={styles.td1}>{item.norek}</td>
                                                <td className={styles.td1}>{item.sandi}</td>
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
                            </Tab.Panel>

                            <Tab.Panel>
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
                                            <th className={styles.th1}>ID User</th>
                                            <th className={styles.th1}>Nama</th>
                                            <th className={styles.th1}>Alamat</th>
                                            <th className={styles.th1}>Email</th>
                                            <th className={styles.th1}>Nama Bank</th>
                                            <th className={styles.th1}>Nomor Rekening</th>
                                            <th className={styles.th1}>Kata Sandi</th>
                                            <th className={styles.th1}></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredData.map((item, index) => (
                                            <tr key={index} className={styles.tr}>
                                                <td className={styles.td1}>{item.id}</td>
                                                <td className={styles.td1}>{item.nama}</td>
                                                <td className={styles.td1}>{item.alamat}</td>
                                                <td className={styles.td1}>{item.email}</td>
                                                <td className={styles.td1}>{item.bank}</td>
                                                <td className={styles.td1}>{item.norek}</td>
                                                <td className={styles.td1}>{item.sandi}</td>
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
                            </Tab.Panel>

                            <Tab.Panel>
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
                                            <th className={styles.th1}>ID User</th>
                                            <th className={styles.th1}>Email</th>
                                            <th className={styles.th1}>Nomor Whatsapp</th>
                                            <th className={styles.th1}></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredData.map((item, index) => (
                                            <tr key={index} className={styles.tr}>
                                                <td className={styles.td1}>{item.id}</td>
                                                <td className={styles.td1}>{item.email}</td>
                                                <td className={styles.td1}>{item.nohp}</td>
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
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </AdminLayout>
    );
}

export default Kerjasama;
