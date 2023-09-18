import styles from './produk.module.css'
import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import TextInput from "@/components/fragments/inputText/inputText";
import React, { useState } from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'
import ReactModal from 'react-modal'


const Produk = () => {
  const [email, setEmail] = useState("")
  const [katasandi, setKataSandi] = useState("")
  const [nowa, setNoWa] = useState("")
  const [nama, setnama] = useState("")
  const [alamat, setalamat] = useState("")
  const [isLoginActive, setIsLoginActive] = useState(true)
  const [error, setError] = useState("")
  const router = useRouter()
  const [isModalVisible, setIsModalVisible] = useState(false);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const users = [
    { email: 'salsa@gmail.com', password: 'Salsabila26' }
  ];

  const handleEmailChange = (newEmail: string) => {
    setEmail(newEmail);
  }

  const handleKataSandiChange = (newKataSandi: string) => {
    setKataSandi(newKataSandi);
  }

  const handlenoWaChange = (newnoWa: string) => {
    setNoWa(newnoWa);
  }

  const handleNamaChange = (newNama: string) => {
    setnama(newNama);
  }

  const handleAlamatChange = (newAlamat: string) => {
    setalamat(newAlamat);
  }

  const handleLogin = () => {
    if (email.trim() === "" || katasandi.trim() === "") {
      setError("Silakan isi email dan kata sandi Anda.")
    } else {
      const user = users.find(u => u.email === email && u.password === katasandi)
  
      if (user) {
        // Berhasil masuk
        console.log('Login berhasil')
        // Lakukan apa yang diperlukan saat login berhasil
        // Misalnya, arahkan pengguna ke halaman BPMaggot
        router.push('/BPMaggot') // Ini akan mengarahkan ke halaman BPMaggot
      } else {
        // Gagal masuk
        setError("Email atau kata sandi tidak valid.")
        // Tampilkan pesan kesalahan atau tindakan lainnya
      }
    }
  };

  const handleDaftar = () => {
      setError('Form harus terisi dengan lengkap.');
      if (isLoginActive) {
        setError('Form harus terisi dengan lengkap.');
      } else if (!emailRegex.test(email)) {
        setError('Format email tidak valid. Masukkan alamat email yang benar.');
      } else {
      // Periksa apakah kata sandi memenuhi kriteria
      const isKataSandiValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,12}$/.test(katasandi);


      if (!isKataSandiValid) {
        setError("Kata sandi harus sesuai dengan panduan yang tertera.");
      } else {
        // Lanjutkan dengan proses pendaftaran jika semua kondisi terpenuhi
        console.log('Pendaftaran berhasil');
        setIsModalVisible(true);
      }
    }
  };


  return (
    <div className={styles.container}>
      <section className={styles.bannerSatu}>
        <h1>menuju kehidupan yang berkelanjutan</h1>
      </section>
      <div className={styles.containerTab}>
        <div className={styles.Tab}>
          <Tab.Group>
            <Tab.List className={styles.tabList}>
              <Tab className={({selected})=>classNames(styles.tab, selected && styles.tabActive)}>MaggotCare</Tab>
              <Tab className={({selected})=>classNames(styles.tab, selected && styles.tabActive)}>TrashCare</Tab>
              <Tab className={({selected})=>classNames(styles.tab, selected && styles.tabActive)}>PartnerCare</Tab>
            </Tab.List>
            <Tab.Panels className={styles.tabPanels}>
              <Tab.Panel>
                <div className={styles.tabContent}>
                  <div className={styles.tabContent1}>
                    <div className={styles.judul}>
                      <h2>MaggotCare</h2>
                    </div>
                    <div className={styles.isi}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius luctus mauris quis eleifend.
                      </p>
                    </div>
                    <div className={styles.produk}>
                      <div className={styles.judulproduk}>
                        <p>WarungMaggot</p>
                      </div>
                      <div className={styles.isiproduk}>
                        <p>
                          Platform yang dirancang untuk memfasilitasi para penjual maggot untuk menjual hasil budidayanya kepada Magalodon dengan harga terbaik.
                        </p>
                      </div>
                    </div>
                    <div className={styles.produk}>
                      <div className={styles.judulproduk}>
                        <p>Kalkupro</p>
                      </div>
                      <div className={styles.isiprodukkal}>
                        <p>
                          Kalkulator profesional yang dapat membantu dalam mengestimasi pendapatan dari hasil budidaya dengan harga terbaik. 
                        </p>
                      </div>
                    </div>
                    <div className={styles.produk}>
                      <div className={styles.judulproduk}>
                        <p>TemanMaggot</p>
                      </div>
                      <div className={styles.isiproduktem}>
                        <p>
                          Melalui platform ini, para peternak maggot memiliki kesempatan untuk saling berbagi pengalaman, tips, dan pengetahuan terkini seputar pemeliharaan maggot. 
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.tabContent2}>
                    <div className={styles.LoginContainer}>
                      {isLoginActive?(
                        <>
                        <div className={styles.Login}>Masuk</div>
                        {error && <div className={styles.error}>{error}</div>}
                        <div className={styles.isian1}>
                          <h2>Masukkan Email</h2>
                          <div className={styles.form}>
                            <TextInput placeholder="Masukkan Email" value={email} onInputChange={handleEmailChange} />
                          </div>
                        </div>
                        <div className={styles.isian2}>
                          <h2>Kata Sandi</h2>
                          <div className={styles.form1}>
                            <TextInput type="password" placeholder="Masukkan Kata Sandi" value={katasandi} onInputChange={handleKataSandiChange} />
                          </div>
                        </div>
                        <div className={styles.buttonContainer}>
                          <button className={styles.button} onClick={handleLogin}>Masuk</button>
                          <p> Belum memiliki akun? 
                            <Link href="/daftar" className={styles.daftar} 
                            onClick={(e) =>{
                              e.preventDefault();
                              setIsLoginActive(!isLoginActive);
                            }}
                            >
                              {isLoginActive? 'Daftar' : 'Kembali ke Masuk'}
                            </Link>
                          </p>
                        </div>
                        </>
                      ):(
                        <>
                        <div className={styles.Login}>Daftar</div>
                        {error && <div className={styles.error}>{error}</div>}
                        <div className={styles.isian1}>
                          <h2>Email</h2>
                          <div className={styles.form}>
                            <TextInput placeholder="Masukkan Email" value={email} onInputChange={handleEmailChange} />
                          </div>
                        </div>
                        <div className={styles.isian1}>
                          <h2>Nama Lengkap</h2>
                          <div className={styles.form}>
                            <TextInput placeholder="Masukkan Nama Lengkap" value={nama} onInputChange={handleNamaChange} />
                          </div>
                        </div>
                        <div className={styles.isian1}>
                          <h2>Alamat</h2>
                          <div className={styles.form}>
                            <TextInput placeholder="Masukkan Alamat" value={alamat} onInputChange={handleAlamatChange} />
                          </div>
                        </div>
                        <div className={styles.isian2}>
                          <h2>Kata Sandi</h2>
                          <div className={styles.form1}>
                            <TextInput type="password" placeholder="Masukkan Kata Sandi" value={katasandi} onInputChange={handleKataSandiChange} />
                            <p className={styles.ketSandi}>*Kata sandi harus terdiri dari 8 - 12 karakter dan mengandung kombinasi huruf besar, huruf kecil, dan angka.</p>
                          </div>
                        </div>
                        <div className={styles.buttonContainer}>
                          <button className={styles.button} onClick={handleDaftar}>Daftar</button>
                          <ReactModal
                            isOpen={isModalVisible}
                            contentLabel="Daftar Berhasil"
                            className={styles.ModalOverlay}
                          >
                            <div className={styles.ModalContent}>
                              <h2>Daftar Berhasil</h2>
                              <p>Selamat, Anda telah berhasil mendaftar!</p>
                              <button onClick={() => setIsModalVisible(false)}>Tutup</button>
                              <button onClick={() => setIsLoginActive(true)}>Masuk</button>
                            </div>
                          </ReactModal>
                          <p>
                            Sudah memiliki akun? {''}
                            <Link
                              href="#"
                              className={styles.daftar}
                              onClick={(e) => {
                                e.preventDefault();
                                setIsLoginActive(!isLoginActive);
                              }}
                            >
                              Masuk
                            </Link>
                          </p>
                        </div>
                        </>
                      )}
                        
                    </div>
                  </div>
                </div>
              </Tab.Panel>


              <Tab.Panel>
                <div className={styles.tabContent}>
                  <div className={styles.tabContent1}>
                    <div className={styles.judul}>
                      <h2>TrashCare</h2>
                    </div>
                    <div className={styles.isi}>
                      <p>
                      Buat masa depan yang lebih berkelanjutan dengan mengurangi limbah pangan dan memberikan kontribusi positif terhadap lingkungan.
                      </p>
                    </div>
                    <div className={styles.produk}>
                      <div className={styles.judulproduk}>
                        <p>WarungDaur</p>
                      </div>
                      <div className={styles.isiproduk}>
                        <p>
                        Platform yang dirancang untuk memfasilitasi para pemilik usaha makanan untuk menjual sisa makanannya kepada Magalodon dengan harga terbaik.
                        </p>
                      </div>
                    </div>
                    <div className={styles.produk}>
                      <div className={styles.judulproduk}>
                        <p>Kalkupro</p>
                      </div>
                      <div className={styles.isiprodukkal2}>
                        <p>
                        Kalkulator profesional yang dapat membantu dalam mengestimasi pendapatan dari hasil budidaya dengan harga terbaik
                        </p>
                      </div>
                    </div>
                    <div className={styles.produk}>
                      <div className={styles.judulproduk}>
                        <p>TemanDaur</p>
                      </div>
                      <div className={styles.isiproduktem}>
                        <p>
                        Melalui platform ini, para pemilik usaha makanan memiliki kesempatan untuk saling berbagi pengalaman, tips, dan pengetahuan terkini seputar daur sampah.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.tabContent2}>
                    <div className={styles.LoginContainer}>
                      <div className={styles.Login}>Masuk</div>
                        <div className={styles.isian1}>
                          <h2>Masukkan Email</h2>
                          <div className={styles.form}>
                            <TextInput placeholder="Masukkan Email" onInputChange={handleEmailChange} />
                          </div>
                        </div>
                        <div className={styles.isian2}>
                          <h2>Kata Sandi</h2>
                          <div className={styles.form1}>
                            <TextInput type="password" placeholder="Masukkan Kata Sandi" onInputChange={handleKataSandiChange} />
                          </div>
                        </div>
                        <div className={styles.buttonContainer}>
                          <button className={styles.button}>Masuk</button>
                          <p> Belum memiliki akun? <Link href="/daftar" className={styles.daftar}>Daftar</Link></p>
                        </div>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
              
              <Tab.Panel>
                <div className={styles.tabContent}>
                  <div className={styles.tabContent1}>
                    <div className={styles.judul}>
                      <h2>PartnerCare</h2>
                    </div>
                    <div className={styles.isi}>
                      <p>
                        Bersama untuk memberikan kontribusi positif bagi lingkungan sekaligus meningkatkan keberhasilan bisnis Anda!
                      </p>
                    </div>
                  </div>

                  <div className={styles.tabContent2}>
                    <div className={styles.LoginContainer}>
                      <div className={styles.Login}>Daftar</div>
                        <div className={styles.isian1}>
                          <h2>Masukkan Email</h2>
                          <div className={styles.form}>
                            <TextInput placeholder="Masukkan Email" onInputChange={handleEmailChange} />
                          </div>
                        </div>
                        <div className={styles.isian2}>
                          <h2>Nomor Whatsapp</h2>
                          <div className={styles.form}>
                            <TextInput placeholder="Masukkan Nomor Whatsapp" onInputChange={handlenoWaChange} />
                          </div>
                        </div>
                        <div className={styles.buttonContainer}>
                          <button className={styles.button}>Daftar</button>
                        </div>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};

export default Produk;
