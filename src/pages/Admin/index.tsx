import styles from './admin.module.css'
import InputText from "@/components/fragments/inputText/inputText"
import { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"


const Admin = () => {
    const [email, setEmail] = useState("")
    const [katasandi, setKataSandi] = useState("")
    const [error, setError] = useState("")
    const router = useRouter()

    const users = [
        { email: 'admin1', password: '123' }
    ];

    const handleEmailChange = (newEmail: string) => {
        setEmail(newEmail);
    }

    const handleKataSandiChange = (newKataSandi: string) => {
        setKataSandi(newKataSandi);
    }

    const handleLogin = () => {
        if (email.trim() === "" || katasandi.trim() === "") {
          setError("Silakan isi email dan kata sandi Anda.")
        } else {
          const user = users.find(u => u.email === email && u.password === katasandi)
      
          if (user) {
            console.log('Login berhasil')
            router.push('/Admin/Dashboard') 
          } else {
            setError("Email atau kata sandi tidak valid.")
          }
        }
      };

    return (
        <div className={styles.container}>
            <div className={styles.containerLogin}>
                <h2>Masuk</h2>
                {error && <p className={styles.error}>{error}</p>}
                <div className={styles.form}>
                    <p>Email</p>
                    <div className={styles.wrapper}>
                        <InputText placeholder="Masukkan Email" value={email} onInputChange={handleEmailChange}/>
                    </div>
                </div>
                <div className={styles.form}>
                    <p>Kata Sandi</p>
                    <div className={styles.wrapper1}>
                        <InputText type="password" placeholder="Masukkan Kata Sandi" value={katasandi} onInputChange={handleKataSandiChange}/>
                    </div>
                </div>
                <div className={styles.button}>
                    <button className={styles.buttonClick} onClick={handleLogin}>Masuk</button>
                </div>
            </div>
        </div>
    );
}

export default Admin