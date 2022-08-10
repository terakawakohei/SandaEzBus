import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <title>Sanda Ez Bus</title>
            <main>{children}</main>
            {/* <Footer /> */}
        </>
    );
}