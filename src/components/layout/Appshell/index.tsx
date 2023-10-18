import Footer from "../Footer";
import Header from "../Navbar";
import { useRouter } from 'next/router';

type AppshellProps = {
    children: React.ReactNode;
    withHeaderAndFooter: boolean; 
}

const Appshell: React.FC<AppshellProps> = ({ children, withHeaderAndFooter }) => {
    const router = useRouter();
    const { pathname } = router;

    return (
        <main>
            {withHeaderAndFooter && <Header activePath={pathname} />}
            {children}
            {withHeaderAndFooter && <Footer />}
        </main>
    )
}

export default Appshell;
