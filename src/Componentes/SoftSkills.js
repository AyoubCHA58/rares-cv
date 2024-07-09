import React from 'react';
import styles from '../Styles/SoftSkills.module.css';

const SoftSkills = ({ habilidades }) => {
    if (!habilidades || habilidades.length === 0) {
        return null;
    }

    return (
        <div className={styles.softSkills}>
            <h2>Soft Skills</h2>
            <ul>
                {habilidades.map((habilidad, index) => (
                    <li key={index}>
                        <strong>{habilidad.categoria}:</strong> {habilidad.detalle}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SoftSkills;
