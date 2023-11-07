import Footer from "../Footer";
import Header from "../Navbar";
import { useRouter } from 'next/router';

type AppshellProps = {
    children: React.ReactNode;
    withHeaderAndFooter: boolean; 
}


const Appshell: React.FC<AppshellProps> = ({ children}) => {

    return (
        <main>
            <Header/>
            {children}
            <Footer />
        </main>
    )
}

export default Appshell;
