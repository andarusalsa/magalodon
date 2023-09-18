import Footer from "../Footer";
import Header from "../Navbar";

type AppshellProps = {
    children: React.ReactNode;
}

const Appshell = (props: AppshellProps) => {
    const {children} = props;
    return(
        <main>
            <Header />
            {children}
            <div><Footer /></div>
        </main>
    )
}

export default Appshell;