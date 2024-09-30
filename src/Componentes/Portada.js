import styles from '../Styles/Portada.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub, faWhatsapp, faSquareGithub  } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

library.add(faPhone, faEnvelope, faLinkedin, faGithub, faWhatsapp, faFileArrowDown);

const Portada = ({ textos }) => {
    const handleDownloadAndOpen = (e) => {
        e.preventDefault();
        const fileUrl = 'Files/_Rares-Andrei_Ana_CV.pdf';

        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = '_Rares-Andrei_Ana_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        window.open(fileUrl, '_blank');
    };
    return (
        <div className={styles.portada}>
            <div className={styles.foto_nombre}>
                <img src="/Pictures/foto-sinFondo.png" alt="Foto CV" className={styles.fotocv} />
                <div className={styles.foto_nombre_derecha}>
                    <h1>Rares Andrei Ana</h1>
                    <h2 className={styles.rol}>{textos.profile?.rol}</h2>
                    <p className={styles.description}>{textos.profile?.description}</p>
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.info_izquierda}>
                    <div className={styles.email}>
                        <FontAwesomeIcon className={styles.icon} icon={faEnvelope} /> <h2 href="mailto:rarescoder@gmail.com" target="_blank" rel="noopener noreferrer">rarescoder@gmail.com </h2>
                    </div>
                    <div className={styles.phone}>
                        <FontAwesomeIcon className={styles.iconTel} icon={faPhone} /> <h2 href="tel:+34643390001">+34 643 39 00 01</h2>  <FontAwesomeIcon className={styles.iconW} icon={faWhatsapp} />
                    </div>
                </div>
                <div className={styles.info_derecha}>
                    <a href="Files/_CV_Rares-Andrei_Ana.pdf" onClick={handleDownloadAndOpen}>
                    <span className={styles.span_textos}>{textos.contact?.['btn-download-cv']}</span>
                    <span className={styles.span_cv}>CV</span>
                        <FontAwesomeIcon className={styles.icon} icon={faFileArrowDown} />
                    </a>
                    <a href="https://www.linkedin.com/in/rares-andrei-ana/?original_referer=" target="_blank" rel="noopener noreferrer">
                    <span className={styles.span_textos}>{textos.contact?.['btn-linkedin']}</span>
                        <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
                    </a>
                    <a href='https://github.com/RaresTecno' target="_blank" rel="noopener noreferrer">
                        <span className={styles.span_textos}>{textos.contact?.['btn-github']}</span>
                        <FontAwesomeIcon className={styles.icon} icon={faSquareGithub } />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Portada;