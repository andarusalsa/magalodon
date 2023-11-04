import styles from './komunitas.module.css'
import AutoAdjustingTextInput from '@/components/fragments/inputText/autoAdjusting'
import React, { useState } from "react";
import Link from 'next/link'
import profil from '@/components/elements/profil.png'
import Image from 'next/image'
import profil1 from '@/components/elements/profil1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage,faHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import {faHeart as faHeartOutline, faComment as faCommentOutline} from '@fortawesome/free-regular-svg-icons'
import {ChevronLeft, Check, X} from 'react-feather'
import MoreButton from '@/components/fragments/moreButton/moreButton'
import Modal from 'react-modal'

const TabContentLimbah = () => {
    const [status, setStatus] = useState<string>("")
    const [selectedCategory, setSelectedCategory] = useState("Pilih Kategori")
    const [liked, setLiked] = useState(false);
    const [error, setError] = useState<string>('')
    const [isStatusActive, setIsStatusActive] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [wordCount, setWordCount] = useState<number>(0)
    const [modalComment, setModalComment] = useState(false)
    const [comment, setComment] = useState("")

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

    const handleCommentChange = (newComment: string) => {
        setComment(newComment);
    }

    const handleLiked = () => {
        setLiked(!liked);
    }

    const options = ['Hapus', 'Edit']

    const handleComment = () => {
        setModalComment(true)
    }

  return (
        <div>
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
                                }}
                            >
                                {isStatusActive? 'Kirimanmu' : 'Kirimanmu'} </Link>
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
    </div>
  );
};

export default TabContentLimbah;
