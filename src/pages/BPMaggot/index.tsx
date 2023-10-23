import styles from './bpmaggot.module.css'
import { Tab } from '@headlessui/react'
import classNames from 'classnames'
import TextInput from "@/components/fragments/inputText/inputText"
import AutoAdjustingTextInput from '@/components/fragments/inputText/autoAdjusting'
import React, { useState } from "react";
import Link from 'next/link'
import profil from '@/components/elements/profil.png'
import Image from 'next/image'
import profil1 from '@/components/elements/profil1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage,faHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import {faHeart as faHeartOutline, faComment as faCommentOutline, faBell as faBellOutline} from '@fortawesome/free-regular-svg-icons'
import {LogOut, ChevronLeft, Check, X} from 'react-feather'
import MoreButton from '@/components/fragments/moreButton/moreButton'
import Modal from 'react-modal'
import AppShell from '@/components/layout/Appshell'

const BPMaggot = () => {
    const [status, setStatus] = useState<string>("")
    const [nama, setnama] = useState("")
    const [nomor, setNomor] = useState("")
    const [norek, setnorek] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("Pilih Kategori")
    const [liked, setLiked] = useState(false);
    const [jumlah, setjumlah] = useState<number>(0)
    const [harga, setharga] = useState<number>(0)
    const [error, setError] = useState<string>('')
    const [isStatusActive, setIsStatusActive] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalLogout, setModalLogout] = useState(false)
    const [wordCount, setWordCount] = useState<number>(0)
    const [modalSell, setModalSell] = useState(false)
    const [modalComment, setModalComment] = useState(false)
    const [comment, setComment] = useState("")
    const [modalSuccess, setModalSuccess] = useState(false)

    const countWords = (text: string) => {
        if (text.trim() === "") {
            return 0;
        }
        const words = text.trim().split(/\s+/);
        return words.length;
    };

    const handleStatusChange = (newStatus: string) => {
        setStatus(newStatus)
        const newWordCount = countWords(newStatus);
        setWordCount(newWordCount)
    }

    const handlePosting = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (status.trim() === "" && status.length <= 200) {
            setError('Status tidak boleh kosong dan tidak boleh lebih dari 200 karakter');
        } else {
            setIsModalOpen(true)

            setTimeout(() => {
                setIsModalOpen(false);
            }, 1000);
        }
    }    

    const handlenamaChange = (newnama: string) => {
        setnama(newnama);
    }

    const handleNomorChange = (newNomor: string) => {
        setNomor(newNomor);
    }

    const handlenorekChange = (newnorek: string) => {
        setnorek(newnorek);
    }

    const handleCommentChange = (newComment: string) => {
        setComment(newComment);
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

    const handleLogout = () => {
        setModalLogout(true)
    }

    const handleConfirmLogout = () => {
        window.location.href = '/beranda';
    }

    const handleSell = () => {
        if (!nama || !nomor || selectedCategory === 'Pilih Kategori' || !norek || jumlah <= 0) {
            setError('Semua kolom harus diisi dengan benar');
        } else {
            setModalSell(true);
        }
    }

    const handleComment = () => {
        setModalComment(true)
    }

    const handleSuccess = () =>{
        setModalSell(false)
        setModalSuccess(true);
        setTimeout(() => {
            setModalSuccess(false);
        }, 2000); 
    }

    return (
        <AppShell withHeaderAndFooter={true}>
        <div className={styles.container}>
            <section className={styles.bannerSatu}>
                <div className={styles.kiri}>
                    <Link href='/BPMaggot/profil' className={styles.ContentProfil}>
                        <Image src={profil} alt="profil" className={styles.profil} />
                        Andaru Putri Salsabila
                    </Link>
                </div>
                <div className={styles.kanan}>
                    <Link href='/BPMaggot/notifikasi'>
                        <FontAwesomeIcon icon={faBellOutline} className={styles.notifikasi}/>
                    </Link>
                    <button className={styles.logout} onClick={handleLogout}>
                        <LogOut className={styles.logout}/>
                    </button>
                    <Modal
                        isOpen={modalLogout}
                        onRequestClose={() => setModalLogout(false)}
                        className={styles.ModalOverlay}
                        overlayClassName={styles.ModalOverlay}
                    >
                        <div className={styles.ModalContent}>
                            <p>Anda yakin ingin keluar?</p>
                            <button onClick={() => setModalLogout(false)}>Kembali</button>
                            <button onClick={handleConfirmLogout}>Ya</button>
                        </div>
                    </Modal>
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
                                        <div className={styles.prof}>
                                        <div className={styles.profilsmall}>
                                            <Link href='#'>
                                                <Image src={profil} alt="profil" className={styles.profil} />
                                            </Link>
                                        </div>
                                        <div className={styles.setStatus}>
                                            <div className={styles.status}>
                                                <div className={styles.statusContainer}>
                                                    <AutoAdjustingTextInput 
                                                    placeholder="Apa pertanyaan atau informasi yang kamu punya?"
                                                    className={styles.statusInput} 
                                                    value={status} 
                                                    onChange={handleStatusChange} 
                                                    />
                                                    <p className={styles.wordCount}>{wordCount}/200</p>
                                                </div>
                                                <div className={styles.iconContainer}>
                                                    <button className={styles.buttonStatus}>
                                                        <FontAwesomeIcon icon={faImage} className={styles.icon}/>
                                                    </button>
                                                    <button className={styles.buttonStatus} onClick={handlePosting}>
                                                        <FontAwesomeIcon icon={faPaperPlane} className={styles.icon} />
                                                    </button>
                                                </div>
                                            </div>
                                            {error && <p className={styles.error}>{error}</p>}
                                            <Modal
                                                isOpen={isModalOpen}
                                                contentLabel="Daftar Berhasil"
                                                className={styles.ModalOverlay1}

                                            >
                                                <div className={styles.ModalContent1}>
                                                    <Check className={styles.check}/>
                                                    <p>Berhasil dikirim!</p>
                                                </div>
                                            </Modal>
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
                                                <div onClick={handleComment} className={styles.comment}>
                                                    <FontAwesomeIcon icon={faCommentOutline} className={styles.icon2} />
                                                    <p className={styles.ket}>1 komentar</p>
                                                </div>
                                                <Modal
                                                    isOpen={modalComment}
                                                    contentLabel="Daftar Berhasil"
                                                    className={styles.ModalOverlay2}
                                                >
                                                    <div className={styles.ModalContent2}>
                                                        <div className={styles.Comment}>
                                                            <div className={styles.headerComment}>
                                                                <p>Kiriman Ivanna Putri</p>
                                                                <X onClick={()=> setModalComment(false)} className={styles.closeComment}/>
                                                            </div>
                                                            <hr/>
                                                            <div className={styles.kirimanComment}>
                                                                <div className={styles.akun}>
                                                                    <Image src={profil1} alt="profil1" className={styles.profilComment} />
                                                                    <p>Ivanna Putri</p>
                                                                </div>
                                                                <div className={styles.isikiriman}>
                                                                    <p>
                                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis auctor magna, in vehicula lacus. Curabitur vehicula quis lorem nec viverra. Proin faucibus neque sed nibh sodales, et maximus erat convallis. Aenean id finibus orci. Aliquam eu aliquam mauris. Nulla porttitor, neque eu aliquam finibus, ante ipsum commodo neque, id porta elit ligula non felis. Maecenas sed varius nisi, eu accumsan lectus. Aliquam lacinia, massa a maximus efficitur, justo nisl vestibulum elit, ac semper ligula purus eget tortor. Vivamus fermentum lacinia ipsum et condimentum.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className={styles.comment1}>
                                                                <div className={styles.commentContainer}>
                                                                    <AutoAdjustingTextInput 
                                                                    placeholder="Tuliskan Komentarmu Disini"
                                                                    className={styles.commentInput} 
                                                                    value={comment} 
                                                                    onChange={handleCommentChange} 
                                                                    />
                                                                </div>
                                                                <div className={styles.iconContainer}>
                                                                    <button className={styles.buttonStatus} onClick={handlePosting}>
                                                                        <FontAwesomeIcon icon={faPaperPlane} className={styles.icon} />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Modal>
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
                                                <MoreButton options={options}/>
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
                                <div className={styles.catatan}>
                                    <p><span className={styles.judulCatatan}>Catatan :</span>
                                    <br/>1. Pengiriman produk hanya dapat dikirimkan ketika penjualanmu sudah disetujui oleh Magalodon. Status penjualan dapat dilihat <Link href='./BPMaggot/profil/StatusPenjualan' className={styles.linkCatat}>di sini.</Link>
                                    <br/>2. Pastikan tuliskan setidaknya ID Pesananmu di produk yang akan kamu kirim.</p>
                                </div>
                                <div className={styles.contentTab2}>
                                    <div className={styles.form}>
                                        <p className={styles.judul}>Nama</p>
                                        <TextInput placeholder='Nama' value={nama} onInputChange={handlenamaChange}/>
                                    </div>
                                    <div className={styles.form}>
                                        <p className={styles.judul}>Nomor Telepon</p>
                                        <TextInput placeholder='Nomor Telepon' value={nomor} onInputChange={handleNomorChange}/>
                                    </div>
                                    <div className={styles.form}>
                                        <p className={styles.judul}>Nama Bank</p>
                                        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className={styles.bankOption}>
                                            <option value="Pilih Kategori">Pilih Bank</option>
                                            <option value="BRI">BRI</option>
                                            <option value="BNI">BNI</option>
                                            <option value="BCA">BCA</option>
                                        </select>
                                    </div>
                                    <div className={styles.form}>
                                        <p className={styles.judul}>Nomor Rekening</p>
                                        <TextInput placeholder='Nomor Rekening' value={norek} onInputChange={handlenorekChange}/>
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
                                        <button className={styles.button} onClick={handleSell}>Jual</button>
                                    </div>
                                    {error && <p className={styles.error}>{error}</p>}
                                    <Modal 
                                    isOpen={modalSell} 
                                    onRequestClose={handleSell} 
                                    className={styles.ModalOverlay} 
                                    overlayClassName={styles.ModalOverlay}>
                                        <div className={styles.Sell}>
                                            <p>Anda yakin data yang diisi sudah sesuai?</p>
                                            <div className={styles.sellOption}>
                                                <button onClick={() => setModalSell(false)} className={styles.buttonSellNo}>Tidak</button>
                                                <button onClick={handleSuccess} className={styles.buttonSellYes}>Ya</button>
                                            </div>
                                        </div>
                                    </Modal>
                                    <Modal
                                        isOpen={modalSuccess} 
                                        onRequestClose={() => setModalSuccess(false)}
                                        contentLabel="Daftar Berhasil"
                                        className={styles.ModalOverlay1}>
                                        <div className={styles.ModalContent1}>
                                            <Check className={styles.check}/>
                                            <p>Berhasil dikirim!</p>
                                            <p>Kamu bisa cek status penjualanmu di menu Profil</p>
                                        </div>
                                    </Modal>
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
        </AppShell>
    );
};

export default BPMaggot;