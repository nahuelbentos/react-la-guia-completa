import Head from 'next/head';
import Link from 'next/link';
import Footer from './Footer';
import Header from './Header';

const Layout = ({pagina, children}) => {
  return (
    <div>
      <Head>
        <title>Guitar LA - {pagina} </title>
        <meta name="description" content="Sitio web de venta de guitarras" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
