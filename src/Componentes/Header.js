'use client';

import React, { useContext } from 'react';
import Link from 'next/link';
import styles from '../Styles/Header.module.css';
import { LanguageContext } from '../Scripts/LanguageContext';

const Header = () => {
  const { changeLanguage } = useContext(LanguageContext);

  const handleClickEn = () => {
    changeLanguage('en');
  };

  const handleClickEs = () => {
    changeLanguage('es');
  };
  return (
    <header className={styles.header}>
      <div className={styles.todo_header}>
        <div className={styles.header_info}>
          <img src="/Pictures/foto-sinFondo.png" alt="Foto CV" className={styles.fotocv} />
          <div className={styles.header_nombre_correo}>
            <h1>Rares Andrei Ana</h1>
            <a href="mailto:rarescoder@gmail.com" target="_blank" rel="noopener noreferrer">rarescoder@gmail.com</a>
          </div>
        </div>
        <div className={styles.nav_flags}>
          {/* <nav className={styles.header_nav}>
            <Link href="/">Inicio</Link>
          </nav> */}
          <div className={styles.flags}>
            <img src="/Flags/uk-flag.svg" alt="uk" className={styles.flag} onClick={handleClickEn} />
            <img src="/Flags/es-flag.svg" alt="es" className={styles.flag} onClick={handleClickEs} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;