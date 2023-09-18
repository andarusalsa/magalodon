import styles from "./Header.module.css"
import Link from "next/link"
import Image from 'next/image'
import logo from '../../elements/logo.jpeg'

const Header = () => {

	
	return(
		<div>
			<header className={styles.header}>
				<div className={styles.logo}> 
					<Image src={logo} alt="logo" className={styles.logo} />
				</div>
				<nav className={styles.navigation}>
					<ul>
						<Link className={styles.link} href='/beranda'>Beranda</Link>
						<Link className={styles.link} href='/tentangkami'>Tentang Kami</Link>
						<Link className={styles.link} href="/produk">Produk</Link>
						<Link className={styles.link} href="/kontak">Kontak</Link>
					</ul>
				</nav>
			</header>
		</div>
	);

};

export default Header;