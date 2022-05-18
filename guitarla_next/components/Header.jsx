import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barra}>
          <Link href="/" passHref>
            <a>
              <Image src="/img/logo.svg" width={400} height={100} alt="Logo de la app" />
            </a>
          </Link>

          <nav className={styles.navegacion}>
            <Link href="/"> Inicio</Link>
            <Link href="/nosotros"> Nosotros</Link>
            <Link href="/blog"> Blog</Link>
            <Link href="/tienda"> Tienda</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
