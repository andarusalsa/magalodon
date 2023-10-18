import Footer from "../Footer";
import Header from "../Navbar";
import { useRouter } from 'next/router';

type AppshellProps = {
    children: React.ReactNode;
}

const Appshell = (props: AppshellProps) => {
    const { children } = props;
    const router = useRouter();
    const { pathname } = router;

    return (
        <main>
            <Header activePath={pathname} />
            {children}
            <div><Footer /></div>
        </main>
    )
}

export default Appshell;
