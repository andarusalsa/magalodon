import styles from './bpmaggot.module.css'
import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import TextInput from "@/components/fragments/inputText/inputText";
import AutoAdjustingTextInput from '@/components/fragments/inputText/autoAdjusting';
import React, { useState } from "react";
import Link from 'next/link';
import profil from '@/components/elements/profil.png'
import Image from 'next/image';
import profil1 from '@/components/elements/profil1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage,faHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import {faHeart as faHeartOutline, faComment as faCommentOutline, faBell as faBellOutline} from '@fortawesome/free-regular-svg-icons'
import {LogOut, ChevronLeft, MoreVertical} from 'react-feather'
import MoreButton from '@/components/fragments/moreButton/moreButton'
import Modal from 'react-modal';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}  

function OpenModal({ isOpen, onClose }: ModalProps) {
    return (
        <div>
            {/* Isi modal di sini */}
            <p>Konten Modal</p>
            <button onClick={onClose}>Tutup Modal</button>
        </div>
    );
}

const BPMaggot = () => {
    const [status, setStatus] = useState<string>("")
    const [nama, setnama] = useState("")
    const [nomor, setNomor] = useState("")
    const [norek, setnorek] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("Pilih Kategori")
    const [liked, setLiked] = useState(false);
    const [jumlah, setjumlah] = useState<number>(0)
    const [harga, setharga] = useState<number>(0)
    const [inputValue, setInputValue] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [isStatusActive, setIsStatusActive] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalType, setModalType] = useState('')

    const handleStatusChange = (newStatus: string) => {
        setStatus(newStatus);
    };

    const handlenamaChange = (newnama: string) => {
        setnama(newnama);
    }

    const handleNomorChange = (newNomor: string) => {
        setNomor(newNomor);
    }

    const handlenorekChange = (newnorek: string) => {
        setnorek(newnorek);
    }

    const handleLiked = () => {
        setLiked(!liked);
    }

    const handlejumlahChange = (newjumlah: string) => {
        if (isNaN(parseInt(newjumlah))) {
            setharga(0);
            setjumlah(0);
            setError('');
        } else {
            const parsedValue = parseInt(newjumlah);
            const Total = parsedValue * 10000;
            setharga(Total);
            setjumlah(parsedValue);
        }
    }

    const options = ['Hapus', 'Edit']


    function handleOptionClick(option: string) {
        if (option === 'Hapus') {
            setModalType('hapus')
            setIsModalOpen(true)
        } else if (option === 'Edit') {
            setModalType('edit')
            setIsModalOpen(true)
        }
    }

    function handleDeleteItem() {
        // Lakukan tindakan penghapusan yang sesuai di sini
        // Setelah penghapusan selesai, tutup modal
        setIsModalOpen(false);
    }

    return (
        <div className={styles.container}>
            <section className={styles.bannerSatu}>
                <div className={styles.kiri}>
                    <Link href='/profil' className={styles.ContentProfil}>
                        <Image src={profil} alt="profil" className={styles.profil} />
                        Andaru Putri Salsabila
                    </Link>
                </div>
                <div className={styles.kanan}>
                    <Link href='/notifikasi'>
                        <FontAwesomeIcon icon={faBellOutline} className={styles.notifikasi}/>
                    </Link>
                    <Link href='/logout'>
                        <LogOut className={styles.logout}/>
                    </Link>
                </div>
            </section>
                
            <section className={styles.containerTab}>
                <Tab.Group>
                    <Tab.List className={styles.tabList}>
                        <Tab className={({selected})=>classNames(styles.tab, selected && styles.tabActive)}>TemanMaggot</Tab>
                        <Tab className={({selected})=>classNames(styles.tab, selected && styles.tabActive)}>WarungMaggot</Tab>
                        <Tab className={({selected})=>classNames(styles.tab, selected && styles.tabActive)}>Kalkupro</Tab>
                    </Tab.List>

                    <Tab.Panels className={styles.tabPanels}>
                        <Tab.Panel>
                            <div className={styles.containerTab1}>
                                {isStatusActive?(
                                <>
                                    <div className={styles.buatstatus}>
                                        <div className={styles.profilsmall}>
                                            <Link href='#'>
                                                <Image src={profil} alt="profil" className={styles.profil} />
                                            </Link>
                                        </div>
                                        <div className={styles.status}>
                                            <div className={styles.statusContainer}>
                                                <AutoAdjustingTextInput 
                                                placeholder="Apa pertanyaan atau informasi yang kamu punya?"
                                                className={styles.statusInput} 
                                                value={status} 
                                                onChange={handleStatusChange} 
                                                />
                                            </div>
                                            <div className={styles.iconContainer}>
                                                    <FontAwesomeIcon icon={faImage} className={styles.icon}/>
                                                    <FontAwesomeIcon icon={faPaperPlane} className={styles.icon} />
                                            </div>
                                        </div>
                                        
                                        <div className={styles.menusmall}>
                                            <Link href='/kirimanmu' className={styles.menu1}
                                            onClick={(e) =>{
                                            e.preventDefault();
                                            setIsStatusActive(!isStatusActive);
                                            }}>{isStatusActive? 'Kirimanmu' : 'Kirimanmu'} </Link>
                                            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className={styles.menu2}>
                                                <option value="Pilih Kategori">Urutkan</option>
                                                <option value="Pilih Kategori">Kiriman Terbaru</option>
                                                <option value="Pilih Kategori">Kiriman Terpopuler</option>
                                                <option value="Pilih Kategori">Magalodon Official</option>
                                            </select>
                                        </div>
                                    </div>

                                    <hr className={styles.line}/>

                                    <div className={styles.kiriman}>
                                        <div className={styles.akun}>
                                            <Image src={profil1} alt="profil1" className={styles.profil} />
                                            <p>Ivanna Putri</p>
                                        </div>
                                        <div className={styles.isikiriman}>
                                            <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis auctor magna, in vehicula lacus. Curabitur vehicula quis lorem nec viverra. Proin faucibus neque sed nibh sodales, et maximus erat convallis. Aenean id finibus orci. Aliquam eu aliquam mauris. Nulla porttitor, neque eu aliquam finibus, ante ipsum commodo neque, id porta elit ligula non felis. Maecenas sed varius nisi, eu accumsan lectus. Aliquam lacinia, massa a maximus efficitur, justo nisl vestibulum elit, ac semper ligula purus eget tortor. Vivamus fermentum lacinia ipsum et condimentum.
                                            </p>
                                            <div className={styles.interaksi}>
                                                <div className={styles.like}>
                                                    <FontAwesomeIcon 
                                                        icon={liked? faHeart : faHeartOutline}
                                                        className={styles.icon2}
                                                        onClick={handleLiked}
                                                    />
                                                    <p className={styles.ket}>2 disukai</p>
                                                </div>
                                                <div className={styles.comment}>
                                                    <FontAwesomeIcon icon={faCommentOutline} className={styles.icon2} />
                                                    <p className={styles.ket}>1 komentar</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <hr className={styles.line}/>

                                    <div className={styles.kiriman}>
                                        <div className={styles.akun}>
                                            <Image src={profil1} alt="profil1" className={styles.profil} />
                                            <p>Ivanna Putri</p>
                                        </div>
                                        <div className={styles.isikiriman}>
                                            <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis auctor magna, in vehicula lacus. Curabitur vehicula quis lorem nec viverra. Proin faucibus neque sed nibh sodales, et maximus erat convallis. Aenean id finibus orci. Aliquam eu aliquam mauris. Nulla porttitor, neque eu aliquam finibus, ante ipsum commodo neque, id porta elit ligula non felis. Maecenas sed varius nisi, eu accumsan lectus. Aliquam lacinia, massa a maximus efficitur, justo nisl vestibulum elit, ac semper ligula purus eget tortor. Vivamus fermentum lacinia ipsum et condimentum.
                                            </p>
                                            <div className={styles.interaksi}>
                                                <div className={styles.like}>
                                                    <FontAwesomeIcon 
                                                        icon={liked? faHeart : faHeartOutline}
                                                        className={styles.icon2}
                                                        onClick={handleLiked}
                                                    />
                                                    <p className={styles.ket}>2 disukai</p>
                                                </div>
                                                <div className={styles.comment}>
                                                    <FontAwesomeIcon icon={faCommentOutline} className={styles.icon2} />
                                                    <p className={styles.ket}>1 komentar</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <hr className={styles.line}/>

                                    <div className={styles.kiriman}>
                                        <div className={styles.akun}>
                                            <Image src={profil1} alt="profil1" className={styles.profil} />
                                            <p>Ivanna Putri</p>
                                        </div>
                                        <div className={styles.isikiriman}>
                                            <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis auctor magna, in vehicula lacus. Curabitur vehicula quis lorem nec viverra. Proin faucibus neque sed nibh sodales, et maximus erat convallis. Aenean id finibus orci. Aliquam eu aliquam mauris. Nulla porttitor, neque eu aliquam finibus, ante ipsum commodo neque, id porta elit ligula non felis. Maecenas sed varius nisi, eu accumsan lectus. Aliquam lacinia, massa a maximus efficitur, justo nisl vestibulum elit, ac semper ligula purus eget tortor. Vivamus fermentum lacinia ipsum et condimentum.
                                            </p>
                                            <div className={styles.interaksi}>
                                                <div className={styles.like}>
                                                    <FontAwesomeIcon 
                                                        icon={liked? faHeart : faHeartOutline}
                                                        className={styles.icon2}
                                                        onClick={handleLiked}
                                                    />
                                                    <p className={styles.ket}>2 disukai</p>
                                                </div>
                                                <div className={styles.comment}>
                                                    <FontAwesomeIcon icon={faCommentOutline} className={styles.icon2} />
                                                    <p className={styles.ket}>1 komentar</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                ):
                                <>
                                    <div className={styles.colAtas}>
                                        <div className={styles.kiri1}>
                                            <Link
                                                href="#"
                                                className={styles.menu1a}
                                                onClick={(e) => {
                                                e.preventDefault();
                                                setIsStatusActive(!isStatusActive);}}>
                                                <ChevronLeft className={styles.iconmenu1} />
                                                Kirimanmu
                                            </Link>
                                        </div>
                                        <div className={styles.kanan1}>
                                            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className={styles.menu2a}>
                                                <option value="Pilih Kategori">Urutkan</option>
                                                <option value="Pilih Kategori">Kiriman Terbaru</option>
                                                <option value="Pilih Kategori">Kiriman Terpopuler</option>
                                                <option value="Pilih Kategori">Magalodon Official</option>
                                            </select>
                                        </div>
                                    </div>

                                    <hr className={styles.line}/>

                                    <div className={styles.kiriman}>
                                        <div className={styles.kirimanUp}>
                                            <div className={styles.akunUp}>
                                                <Image src={profil1} alt="profil1" className={styles.profilUp} />
                                                <p>Andaru Putri Salsabila</p>
                                            </div>
                                            <div className={styles.more}>
                                                <MoreButton options={options} />
                                                {isModalOpen && (
                                                    <Modal
                                                        isOpen={isModalOpen}
                                                        onRequestClose={() => setIsModalOpen(false)}
                                                        contentLabel="Konfirmasi Hapus"
                                                        className={styles.modal}
                                                        overlayClassName={styles.overlay}
                                                    >
                                                        {modalType === 'hapus' && (
                                                            <>
                                                                <div className={styles.modalContent}>
                                                                    <h2>Konfirmasi Hapus</h2>
                                                                    <p>Yakin ingin menghapus?</p>
                                                                    <div className={styles.modalButtons}>
                                                                        <button onClick={handleDeleteItem} className={styles.yesButton}>Ya</button>
                                                                        <button onClick={() => setIsModalOpen(false)} className={styles.noButton}>Tidak</button>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        )}
                                                        {modalType === 'edit' && (
                                                            <>
                                                                <div className={styles.modalContent}>
                                                                    <h2>Edit</h2>
                                                                    <p>Isi modal untuk opsi Edit di sini</p>
                                                                    <div className={styles.modalButtons}>
                                                                        <button onClick={() => setIsModalOpen(false)} className={styles.closeButton}>Tutup</button>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        )}
                                                    </Modal>
                                                )}
                                            </div>
                                        </div>
                                        <div className={styles.isikiriman}>
                                            <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis auctor magna, in vehicula lacus. Curabitur vehicula quis lorem nec viverra. Proin faucibus neque sed nibh sodales, et maximus erat convallis. Aenean id finibus orci. Aliquam eu aliquam mauris. Nulla porttitor, neque eu aliquam finibus, ante ipsum commodo neque, id porta elit ligula non felis. Maecenas sed varius nisi, eu accumsan lectus. Aliquam lacinia, massa a maximus efficitur, justo nisl vestibulum elit, ac semper ligula purus eget tortor. Vivamus fermentum lacinia ipsum et condimentum.
                                            </p>
                                            <div className={styles.interaksi}>
                                                <div className={styles.like}>
                                                    <FontAwesomeIcon 
                                                        icon={liked? faHeart : faHeartOutline}
                                                        className={styles.icon2}
                                                        onClick={handleLiked}
                                                    />
                                                    <p className={styles.ket}>2 disukai</p>
                                                </div>
                                                <div className={styles.comment}>
                                                    <FontAwesomeIcon icon={faCommentOutline} className={styles.icon2} />
                                                    <p className={styles.ket}>1 komentar</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className={styles.line}/>
                                </>}
                            </div>
                        </Tab.Panel>

                        <Tab.Panel>
                            <div className={styles.containerTab}>
                                <div className={styles.contentTab2}>
                                    <div className={styles.form}>
                                        <p className={styles.judul}>Nama</p>
                                        <TextInput placeholder='Nama' onInputChange={handlenamaChange}/>
                                    </div>
                                    <div className={styles.form}>
                                        <p className={styles.judul}>Nomor Telepon</p>
                                        <TextInput placeholder='Nomor Telepon' onInputChange={handleNomorChange}/>
                                    </div>
                                    <div className={styles.form}>
                                        <p className={styles.judul}>Nama Bank</p>
                                        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className={styles.bankOption}>
                                            <option value="Pilih Kategori">Pilih Bank</option>
                                            <option value="Pilih Kategori">BRI</option>
                                            <option value="Pilih Kategori">BNI</option>
                                            <option value="Pilih Kategori">BCA</option>
                                        </select>
                                        
                                    </div>
                                    <div className={styles.form}>
                                        <p className={styles.judul}>Nomor Rekening</p>
                                        <TextInput placeholder='Nomor Rekening' onInputChange={handlenorekChange}/>
                                    </div>
                                    <div className={styles.form}>
                                        <p className={styles.judul}>Jumlah yang ingin dijual</p>
                                        <TextInput 
                                        type="number" 
                                        placeholder='Masukkan jumlah dengan satuan kilogram' 
                                        value={jumlah.toString()} 
                                        onInputChange={(newValue) => handlejumlahChange(newValue)}
                                        />
                                        <p className={styles.ket2}>*Masukkan jumlah dengan satuan kilogram</p>
                                    </div>
                                    <div className={styles.hasil}>
                                        <p className={styles.judul1}>Estimasi Pendapatan : Rp. {harga}</p>
                                    </div>
                                    <div>
                                        <button className={styles.button}>Jual</button>
                                    </div>
                                </div>
                            </div>
                        </Tab.Panel>

                        <Tab.Panel>
                            <div className={styles.containerTab1}>
                                <div className={styles.contentTab3}>
                                    <div className={styles.form3}>
                                        <div className={styles.col1}>
                                            <p>Jumlah yang ingin dijual</p>
                                            <div className={styles.col2}>
                                                <TextInput 
                                                    type="number" 
                                                    placeholder='Masukkan jumlah dengan satuan kilogram' 
                                                    value={jumlah.toString()} 
                                                    onInputChange={(newValue) => handlejumlahChange(newValue)}
                                                />
                                                <p className={styles.ket3}>*Masukkan jumlah dengan satuan kilogram</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.hasil3}>
                                        <p className={styles.judul1}>Estimasi Pendapatan</p>
                                        <p className={styles.harga}>Rp. {harga}</p>
                                    </div>
                                    <div>
                                        <p className={styles.ket4}>Pendapatan yang Anda lihat selalu berubah mengikuti perubahan harga terbaru</p>
                                    </div>
                                </div> 
                            </div>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </section>
        </div>
    );
};

export default BPMaggot;