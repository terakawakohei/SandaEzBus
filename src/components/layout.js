import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <title>Sanda Ez Bus</title>
            <meta name="description" content="兵庫県三田市内のイベント告知・経路案内を行います。" />
            <main>{children}</main>
            {/* <Footer /> */}
        </>
    );
}