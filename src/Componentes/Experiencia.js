import styles from '../Styles/Experiencia.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub, faWhatsapp, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

library.add(faPhone, faEnvelope, faLinkedin, faGithub, faWhatsapp, faFileArrowDown);

const Experiencia = ({ textos }) => {
        // Función para renderizar la descripción con saltos de línea interpretados como <br />
        const renderDescription = () => {
            return { __html: textos.experience?.['first-job'].description.replace(/\n/g, '<br /><br />') };
        };
    return (
        <div className={styles.experiencia}>
            <div className={styles.exp}>
                <div className={styles.textos}>
                    <div className={styles.todo_textos}>
                        <h3>{textos.experience?.['first-job'].title}</h3>
                        <p dangerouslySetInnerHTML={renderDescription()} />
                    </div>
                    <div className={styles.frameworks}>
                        {textos.experience?.['first-job'].frameworks.map((framework, index) => (
                            <span key={index}>{framework}</span>
                        ))}
                    </div>
                </div>
                <img src="/Pictures/fontventa.png" alt="Foto CV" className={styles.fotocv} />

            </div>
        </div>
    );
};

export default Experiencia;