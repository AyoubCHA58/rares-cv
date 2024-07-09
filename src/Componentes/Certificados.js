import React from 'react';
import styles from '../Styles/Certificados.module.css';

const Certificados = ({ certificados }) => {
    if (!certificados || certificados.length === 0) {
        return null;
    }

    return (
        <div className={styles.certificados}>
            <h2>Certificados</h2>
            {certificados.map((certificado, index) => (
                <div key={index} className={styles.entry}>
                    <h3>{certificado.title}</h3>
                    <p><strong>Centro:</strong> {certificado.center}</p>
                    <p><strong>Impartido por:</strong> {certificado.by}</p>
                    <p><strong>Horas:</strong> {certificado.hours}</p>
                    {certificado.url && (
                        <a href={`https://${certificado.url}`} target="_blank" rel="noopener noreferrer" className={styles.btnVerCertificado}>
                            Ver Certificado
                        </a>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Certificados;
