import React from 'react';
import styles from '../Styles/HabilidadesTecnicas.module.css';

const HabilidadesTecnicas = ({ habilidades }) => {
    if (!habilidades || habilidades.length === 0) {
        return null;
    }

    return (
        <div className={styles.habilidadesTecnicas}>
            <h2>Habilidades Técnicas</h2>
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

export default HabilidadesTecnicas;
