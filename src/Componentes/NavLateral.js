'use client';

import React, { useContext, useState } from 'react';
import { LanguageContext } from '@/Scripts/LanguageContext';
import styles from '@/Styles/NavLateral.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

library.add(faBars);

const NavLateral = () => {
    const [navVisible, setNavVisible] = useState(false);
    const [rotateBtn, setRotateBtn] = useState(false);
    const { textos } = useContext(LanguageContext);

    const toggleNav = () => {
        setNavVisible(!navVisible);
        setRotateBtn(!rotateBtn);
        if (!navVisible && window.innerWidth <= 937) {
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflow = "visible";
        }
    };
    const cerrarNav = () =>{
        setNavVisible(false);
        document.body.style.overflow = "visible";
    }
    return (
        <div className={styles.todoNav}>

            <FontAwesomeIcon className={styles.btn_hamburguesa_mostrar} onClick={toggleNav} icon={faBars}></FontAwesomeIcon>
            <div className={styles.invisible + (navVisible ? ` ${styles.navInvisible}` : '')}></div>
            <nav className={styles.NavLateral + (navVisible ? ` ${styles.NavLateral_visible}` : '')}>
                <h1>Rares</h1>
                <a className={styles.email} href="mailto:rarescoder@gmail.com" target="_blank" rel="noopener noreferrer">rarescoder@gmail.com</a>
                <div className={styles.nav_elemento}>
                    <a href="#top" onClick={cerrarNav} className={styles.ind}>{textos.index?.['element-1']}</a>
                </div>
                <div className={styles.nav_elemento}>
                    <a href="#experience"  onClick={cerrarNav} className={styles.ind}>{textos.index?.['element-2']}</a>
                </div>
                <div className={styles.nav_elemento}>
                    <a href="#Education" onClick={cerrarNav} className={styles.ind}>{textos.index?.['element-4']}</a>
                </div>
                <div className={styles.nav_elemento}>
                    <a href="#frameworks" onClick={cerrarNav} className={styles.ind}>{textos.index?.['element-5']}</a>
                </div>
                <div className={styles.nav_elemento}>
                    <a href="#technologies" onClick={cerrarNav} className={styles.ind}>{textos.index?.['element-6']}</a>
                </div>
                <div className={styles.nav_elemento}>
                    <a href="#soft" onClick={cerrarNav} className={styles.ind}>{textos.index?.['element-7']}</a>
                </div>
                <div className={styles.nav_elemento}>
                    <a href="#lang" onClick={cerrarNav} className={styles.ind}>{textos.index?.['element-8']}</a>
                </div>
                <div className={styles.nav_elemento}>
                    <a href="#extras" onClick={cerrarNav} className={styles.ind}>{textos.index?.['element-9']}</a>
                </div>
                <svg className={styles.btn_mostrar + (rotateBtn ? ` ${styles.rotate}` : '')} onClick={toggleNav} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill="currentColor" d="m9.216 7.619 4.204 4.204a.25.25 0 0 1 0 .354l-4.204 4.204a.75.75 0 0 0 1.06 1.061l4.205-4.204a1.75 1.75 0 0 0 0-2.475l-4.204-4.205a.75.75 0 0 0-1.061 1.06"></path></svg>
            </nav>
        </div>
    );
};

export default NavLateral;