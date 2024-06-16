import React from 'react';
import styles from '../Styles/Proyectos.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub, faWhatsapp, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

library.add(faPhone, faEnvelope, faLinkedin, faGithub, faWhatsapp, faFileArrowDown);

const Proyectos = ({ textos, projectKey, index }) => {
    
    if (!textos.projects || !textos.projects[projectKey]) {
        return null;
    }
    const proyecto = textos.projects[projectKey];
    const esPar = index % 2 === 0;
    const url_image = proyecto['url-image'];
    const renderDescription = () => {
        return { __html: proyecto.description?.replace(/\n/g, '<br /><br />') };
    };
    return (
        <div className={styles.proyectos}>
            <div className={esPar ? styles.pro : styles.proInv}>
                <div className={styles.textos}>
                    <div className={styles.todo_textos}>
                        <h3>{proyecto.title}</h3>
                        <p dangerouslySetInnerHTML={renderDescription()} />
                    </div>
                    <div className={styles.todo_frameworks}>
                        <div className={styles.frameworks}>
                            {proyecto.frameworks?.map((framework, index) => (
                                <span key={index}>{framework}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <img src={url_image} alt="Foto CV" className={styles.fotocv} />
            </div>
        </div>
    );
};

export default Proyectos;