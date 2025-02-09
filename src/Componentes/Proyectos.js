import React from 'react';
import styles from '../Styles/Proyectos.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub, faWhatsapp, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faFileArrowDown, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
library.add(faPhone, faEnvelope, faLinkedin, faGithub, faWhatsapp, faFileArrowDown, faArrowUpRightFromSquare);

const Proyectos = ({ textos, projectKey, index }) => {
    
    if (!textos.projects || !textos.projects[projectKey]) {
        return null;
    }
    const proyecto = textos.projects[projectKey];
    const esPar = index % 2 === 0;
    const url_image = proyecto['url-image'];
    const url = proyecto.url;
    console.log(url);
    
    const renderDescription = () => {
        return { __html: proyecto.description?.replace(/\n/g, '<br /><br />') };
    };
    return (
        <div className={styles.proyectos}>
            <div className={esPar ? styles.proInv : styles.pro}>
                <div className={styles.textos}>
                    <div className={styles.todo_textos}>
                        <h3>{proyecto.title}</h3>
                        <p dangerouslySetInnerHTML={renderDescription()} />
                    </div>

                    {url && (
                        <a className={styles.btn_visitar} href={url} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className={styles.iconA} icon={faArrowUpRightFromSquare} /> {textos.projects.info.visit}
                        </a>
                    )}
                    <div className={styles.todo_frameworks}>
                        <div className={styles.frameworks}>
                            {proyecto.frameworks?.map((framework, index) => (
                                <span key={index}>{framework}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <a href={url} target="_blank" rel="noopener noreferrer"><img src={url_image} alt="Foto Proyecto"  /></a>
            </div>
        </div>
    );
};

export default Proyectos;