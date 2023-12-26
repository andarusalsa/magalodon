import Footer from "../Footer";
import Header from "../Navbar";

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
