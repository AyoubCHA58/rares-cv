import styles from '../Styles/Portada.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub, faWhatsapp, faSquareGithub  } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

library.add(faPhone, faEnvelope, faLinkedin, faGithub, faWhatsapp, faFileArrowDown);

const Portada = ({ textos }) => {
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
                        <FontAwesomeIcon className={styles.icon} icon={faPhone} /> <h2 href="tel:+34643390001">+34 643 39 00 01</h2>  <FontAwesomeIcon className={styles.iconW} icon={faWhatsapp} />
                    </div>
                </div>
                <div className={styles.info_derecha}>
                    <button>
                        {textos.contact?.['btn-download-cv']}
                        <FontAwesomeIcon className={styles.icon} icon={faFileArrowDown} />
                    </button>
                    <button>
                        {textos.contact?.['btn-linkedin']}
                        <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
                    </button>
                    <button>
                        {textos.contact?.['btn-github']}
                        <FontAwesomeIcon className={styles.icon} icon={faSquareGithub } />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Portada;